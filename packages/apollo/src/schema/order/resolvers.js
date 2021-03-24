import { keyBy } from 'lodash'
import checkDiscount from '../discount/helpers/checkDiscount'

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

const getTotalOrder = async ({
  products,
  orderProductsById,
  discount,
}) => {
  // TODO: скидка на все товары или на часть
  const totalPrice = products.reduce(
    (base, product) => base + product.price * orderProductsById[product.id].productsCount,
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
      const products = await loaders.product.loadMany(orderProducts.map(({ id }) => Number(id)))
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
    }, { sequelize, models }) => sequelize.transaction(async (transaction) => {
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
      const order = await models.order.create({
        address,
        intercomCode,
        personsCount,
        comment,
        ourComment,
        status,
        deliveryTime: 10000,
        phoneNumber,
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
    }, { models, sequelize }) =>
      sequelize.transaction(async (transaction) => {
        const updatedOrder = await models.order.update({
          address,
          intercomCode,
          personsCount,
          comment,
          ourComment,
          status,
          deliveryTime: 50000,
          phoneNumber,
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
  },

  Order: {
    discounts: async (order) => order.getDiscounts(),
    bonuses: async (order) => order.getBonuses(),
    orderProducts: async (order) => order.getOrderProducts(),
  },

  OrderProduct: {
    product: async (orderProduct) => orderProduct.getProduct(),
    order: async (orderProduct) => orderProduct.getOrder(),
  },
}

resolvers.Order.orderTotal = async (...args) => {
  const [,, { loaders }] = args
  const discounts = await resolvers.Order.discounts(...args)
  const orderProducts = await resolvers.Order.orderProducts(...args)
  const products = await loaders.product.loadMany(orderProducts.map(({ productId }) => Number(productId)))
  const orderProductsById = keyBy(orderProducts, 'productId')

  return getTotalOrder({
    products,
    orderProductsById,
    discount: discounts[0],
  })
}

export default resolvers
