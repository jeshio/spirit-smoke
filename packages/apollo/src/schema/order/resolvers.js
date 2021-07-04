import { keyBy } from 'lodash'
import checkDiscount from '../discount/helpers/checkDiscount'

const getProductPrice = (productWithPrice) => {
  if (productWithPrice.executionType && productWithPrice.executionType.price !== null) {
    return productWithPrice.executionType.price
  }

  if (productWithPrice.price === null) {
    return productWithPrice?.productLine?.price ?? null
  }

  if (productWithPrice.executionType) {
    return productWithPrice.originalProduct?.price ?? null
  }

  return productWithPrice.price
}

const getTotalDiscount = ({
  totalPrice,
  discount,
}) => {
  let totalDiscount = 0

  if (discount) {
    if (discount.percent) {
      totalDiscount += Math.ceil(totalPrice * (discount.percent / 100))
    }
    if (discount.rub) {
      totalDiscount += discount.rub
    }
  }

  return totalDiscount
}

const getTotalOrder = ({
  products,
  orderProductsById,
  discount,
}) => {
  // TODO: скидка на все товары или на часть
  const totalPrice = products.reduce(
    (base, product) => base + getProductPrice(product) * orderProductsById[product.id].productsCount,
    0,
  )
  const totalDiscount = getTotalDiscount({
    totalPrice,
    discount,
  })
  const totalPriceWithDiscount = Math.max(totalPrice - totalDiscount, 0)

  return {
    totalPrice,
    totalPriceWithDiscount,
    totalDiscount,
  }
}

const resolvers = {
  Query: {
    orders: async (parent, args, { models }) => models.order.findAll({
      include: { model: models.orderProduct, include: models.product },
      order: [['id', 'DESC']],
    }),
    order: async (parent, { id }, { models }) => models.order.findByPk(id, {
      include: { model: models.orderProduct, include: models.product },
    }),
    orderTotal: async (parent, { products: orderProducts, discountCode }, { models, loaders }) => {
      // TODO: скидка без кода
      // сделать версию для существующего заказа, где берётся привязанная к нему скидка
      const discountByCode = await models.discount.findOne({
        where: {
          code: discountCode || '',
        },
        include: {
          model: models.order,
          required: false,
          where: {
            status: 'SUCCESS',
          },
        },
      })

      const discountStatus = checkDiscount(discountByCode, discountByCode?.orders)
      const products = await loaders.productWithPrice.loadMany(orderProducts.map(({ id }) => Number(id)))
      const orderProductsById = keyBy(orderProducts, 'id')

      return getTotalOrder({
        products,
        orderProductsById,
        discount: discountStatus.isDisabled ? undefined : discountByCode,
      })
    },
  },

  Mutation: {
    // TODO: простановка статуса, переход на следующий
    createOrder: async (parent, {
      input: {
        address,
        intercomCode,
        personsCount,
        comment,
        ourComment,
        // TODO: deliveryTime,
        phoneNumber,
        status,
        products,
        discountCode,
      },
    }, { sequelize, models, loaders }) => sequelize.transaction(async (transaction) => {
      const discountByCode = await models.discount.findOne({
        where: {
          code: discountCode || '',
        },
        include: {
          model: models.order,
          required: false,
          where: {
            status: 'SUCCESS',
          },
        },
      })
      const discountStatus = checkDiscount(discountByCode, discountByCode?.orders)
      const productsWithData = await loaders.productWithPrice.loadMany(products.map(({ id }) => Number(id)))

      const orderProductsById = keyBy(products, 'id')

      const orderTotal = getTotalOrder({
        products: productsWithData,
        orderProductsById,
        discount: discountByCode,
      })
      const order = await models.order.create({
        address,
        intercomCode,
        personsCount,
        comment,
        ourComment,
        status,
        deliveryTime: 10000,
        phoneNumber,
        revenue: orderTotal.totalPriceWithDiscount,
      }, { transaction, individualHooks: true })

      if (!discountStatus.isDisabled) {
        await order.addDiscount(discountByCode.id, {
          transaction,
        })
      }

      const promises = products.map(({ id: productId, productsCount }) =>
        order.addProduct(productId, {
          transaction,
          through: {
            productsCount,
          },
        }))

      await Promise.all(promises)

      return order
    }),
    updateOrder: (parent, {
      id,
      input: {
        address,
        intercomCode,
        personsCount,
        comment,
        ourComment,
        status,
        // TODO: deliveryTime,
        phoneNumber,
        products,
      },
    }, { models, sequelize, loaders }) =>
      sequelize.transaction(async (transaction) => {
        const productsWithData = await loaders.productWithPrice.loadMany(products.map((product) => Number(product.id)))
        const orderData = await models.order.findByPk(id)
        const discounts = await resolvers.Order.discounts(orderData)
        const orderProductsById = keyBy(products, 'id')
        const orderTotal = getTotalOrder({
          products: productsWithData,
          orderProductsById,
          discount: discounts[0],
        })
        const updatedOrder = await models.order.update({
          address,
          intercomCode,
          personsCount,
          comment,
          ourComment,
          status,
          deliveryTime: 50000,
          phoneNumber,
          revenue: orderTotal.totalPriceWithDiscount,
        }, {
          where: { id }, returning: true, transaction, individualHooks: true,
        }).then(([, [order]]) => order)
        await updatedOrder.setProducts(null, { transaction })
        const promises = products.map(({ id: productId, productsCount }) =>
          updatedOrder.addProduct(productId, {
            transaction,
            through: {
              productsCount,
            },
          }))

        await Promise.all(promises)

        return updatedOrder
      }),
    // TODO: удалить
    updateOrdersRevenue: async (parent, args, context) => {
      const orders = await resolvers.Query.orders(parent, args, context)

      await context.sequelize.transaction(async (transaction) => {
        const promises = orders.map(async (order) => {
          const orderTotal = await resolvers.Order.orderTotal(order, args, context)
          await context.models.order.update({
            revenue: orderTotal.totalPriceWithDiscount,
          }, {
            where: { id: order.id }, returning: true, transaction, individualHooks: true,
          })
        })

        await Promise.all(promises)
      })

      return true
    },
    deleteOrder: (parent, { id }, { models }) => models.order.destroy({
      where: {
        id,
      },
    }).then(() => id),
  },

  Order: {
    discounts: async (order) => order.getDiscounts(),
    bonuses: async (order) => order.getBonuses(),
    orderProducts: async (order) => order.getOrderProducts(),
    orderTotal: async (...args) => {
      const [,, { loaders }] = args
      const discounts = await resolvers.Order.discounts(...args)
      const orderProducts = await resolvers.Order.orderProducts(...args)
      const products = await loaders.productWithPrice
        .loadMany(orderProducts.map(({ productId }) => Number(productId)))
      const orderProductsById = keyBy(orderProducts, 'productId')

      return getTotalOrder({
        products,
        orderProductsById,
        discount: discounts[0],
      })
    },
    profit: async (...args) => {
      const [,, { loaders, mergedResolvers }] = args
      const [, ...otherArgs] = args
      const orderProducts = await resolvers.Order.orderProducts(...args)
      const products = await loaders.productWithPrice
        .loadMany(orderProducts.map(({ productId }) => Number(productId)))
      const productsPrimeCosts = await Promise.all(
        products.map((product) => mergedResolvers.Product.primeCost(product, ...otherArgs)),
      )
      const totalPrimeCost = productsPrimeCosts.reduce(
        (base, price, index) => base + price * orderProducts[index].productsCount,
        0,
      )
      const { totalPriceWithDiscount } = await resolvers.Order.orderTotal(...args)

      return totalPriceWithDiscount - totalPrimeCost
    },
    margin: async (...args) => {
      const orderTotal = await resolvers.Order.orderTotal(...args)
      const profit = await resolvers.Order.profit(...args)
      const totalPrimeCost = orderTotal.totalPriceWithDiscount - profit
      const result = ((profit / totalPrimeCost) || 0) * 100

      return Number.isFinite(result) ? result.toFixed(2) : 0
    },
  },

  OrderProduct: {
    product: async (orderProduct) => orderProduct.getProduct(),
    order: async (orderProduct) => orderProduct.getOrder(),
  },
}

export default resolvers
