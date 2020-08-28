const resolvers = {
  Query: {
    companies: async (parent, args, { models }) => models.company.findAll(),
    company: async (parent, { id }, { models }) => models.company.findByPk(id),
  },

  Mutation: {
    createCompany: (parent, {
      name, slug,
    }, { models }) => models.company.create({
      name, slug,
    }),
    deleteCompany: (parent, { id }, { models }) => models.company.destroy({
      where: {
        id,
      },
    }).then(() => id),
  },

  Company: {
    products: async (company) => company.getProducts(),
  },
}

export default resolvers
