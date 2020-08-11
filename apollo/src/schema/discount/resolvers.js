const resolvers = {
  Query: {
    discounts: async (parent, args, { models }) => models.discount.findAll(),
    discount: async (parent, { id }, { models }) => models.discount.findByPk(id),
  },

  Mutation: {
    createDiscount: (parent, {
      input: {
        name,
        percent,
        rub,
        code,
        startDate,
        endDate,
        isGlobal,
      },
    }, { models }) => models.discount.create({
      name,
      percent,
      rub,
      code,
      startDate,
      endDate,
      isGlobal,
    }),
  },

  Discount: {
  },
}

export default resolvers
