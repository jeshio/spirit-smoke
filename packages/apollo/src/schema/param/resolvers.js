const resolvers = {
  Query: {
    params: async (parent, args, { models }) => models.param.findAll(),
    param: async (parent, { id }, { models }) => models.param.findByPk(id),
  },

  Mutation: {
    createParam: (parent, {
      input: { name, slug, value },
    }, { models }) => models.param.create({
      name, slug, value,
    }),
  },
}

export default resolvers
