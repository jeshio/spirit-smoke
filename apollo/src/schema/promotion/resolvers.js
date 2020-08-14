const resolvers = {
  Query: {
    promotions: async (parent, args, { models }) => models.promotion.findAll(),
    promotion: async (parent, { id }, { models }) => models.promotion.findByPk(id),
  },

  Mutation: {
    createPromotion: (parent, {
      input: {
        name,
        description,
        imageUrl,
        startDate,
        endDate,
        priority,
      },
    }, { models }) => models.promotion.create({
      name,
      description,
      imageUrl,
      startDate,
      endDate,
      priority,
    }),
  },
}

export default resolvers
