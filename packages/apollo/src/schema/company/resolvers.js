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
  },

  Company: {
    products: async (company) => company.getProducts(),
  },
}

export default resolvers
