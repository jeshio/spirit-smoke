const resolvers = {
  Query: {
    companies: async (parent, args, { models }) => models.company.findAll(),
    company: async (parent, { id }, { models }) => models.company.findByPk(id),
  },

  Mutation: {
    createCompany: (parent, {
      name, slug, productCategoryId,
    }, { models }) => models.company.create({
      name, slug, productCategoryId,
    }),
  },

  Company: {
    productCategory: async (company) => company.getProductCategory(),
    products: async (company) => company.getProducts(),
  },
}

export default resolvers
