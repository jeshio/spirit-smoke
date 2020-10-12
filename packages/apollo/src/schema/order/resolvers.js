const resolvers = {
  Query: {
    orders: async (parent, args, { models }) => models.order.findAll({
      include: { model: models.orderProduct, include: models.product },
    }),
    order: async (parent, { id }, { models }) => models.order.findByPk(id, {
      include: { model: models.orderProduct, include: models.product },
    }),
  },

  Mutation: {
    createOrder: async (parent, {
      input: {
        address,
        intercomCode,
        personsCount,
        comment,
        ourComment,
        // TODO: deliveryTime,
        phoneNumber,
        products,
      },
    }, { sequelize, models }) => sequelize.transaction(async (transaction) => {
      const order = await models.order.create({
        address,
        intercomCode,
        personsCount,
        comment,
        ourComment,
        deliveryTime: 10000,
        phoneNumber,
      }, { transaction })
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
          deliveryTime: 50000,
          phoneNumber,
        }, { where: { id }, returning: true, transaction }).then(([, [order]]) => order)
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
    totalPrice: async (order) => order.orderProducts
      .reduce((base, { product, productsCount }) => base + product.price * productsCount, 0),
  },

  OrderProduct: {
    product: async (orderProduct) => orderProduct.getProduct(),
    order: async (orderProduct) => orderProduct.getOrder(),
  },
}

export default resolvers
