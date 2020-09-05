const resolvers = {
  Query: {
    companies: async (parent, args, { models }) => models.company.findAll({
      order: [['id', 'DESC']],
    }),
    company: async (parent, { id }, { loaders }) => loaders.company.load(Number(id)),
  },

  Mutation: {
    createCompany: (parent, {
      input: { name, slug },
    }, { models }) => models.company.create({
      name, slug,
    }),
    updateCompany: (parent, {
      id, input: { name, slug },
    }, { models }) => models.company.update({
      name, slug,
    }, {
      where: { id }, returning: true,
    }).then(([, [company]]) => company),
    deleteCompany: (parent, { id }, { models }) => models.company.destroy({
      where: {
        id,
      },
    }).then(() => id),
  },

  Company: {
    products: async (company) => company.getProducts(), // TODO: сделать loader
  },
}

export default resolvers
