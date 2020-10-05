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
        deliveryTime,
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
        deliveryTime,
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
