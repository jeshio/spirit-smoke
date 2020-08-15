const resolvers = {
  Query: {
    bonuses: async (parent, args, { models }) => models.bonus.findAll(),
    bonus: async (parent, { id }, { models }) => models.bonus.findByPk(id),
  },

  Mutation: {
    createBonus: (parent, {
      input: {
        name, slug, conditionsDescription, iconUrl,
      },
    }, { models }) => models.bonus.create({
      name, slug, conditionsDescription, iconUrl,
    }),
    addOrderBonus: async (parent, { bonusId, orderId }, { models }) => {
      const bonus = await models.bonus.findByPk(bonusId)
      await bonus.addOrder(orderId)
      return bonus
    },
  },

  Bonus: {
    orders: async (bonus) => bonus.getOrders(),
    discounts: async (bonus) => bonus.getDiscounts(),
  },
}

export default resolvers
