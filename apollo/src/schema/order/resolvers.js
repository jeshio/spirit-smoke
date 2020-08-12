const resolvers = {
  Query: {
    orders: async (parent, args, { models }) => models.order.findAll(),
    order: async (parent, { id }, { models }) => models.order.findByPk(id),
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
    products: async (order) => order.getProducts({
      through: {
        attributes: ['productsCount'],
      },
    }),
  },
}

export default resolvers
