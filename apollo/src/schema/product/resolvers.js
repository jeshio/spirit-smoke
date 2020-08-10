const resolvers = {
  Query: {
    products: async (parent, args, { models }) => models.product.findAll(),
    product: async (parent, { id }, { models }) => models.product.findByPk(id),
  },

  Mutation: {
    createProduct: (parent, {
      name, slug, price, count, productCategoryId, companyId,
    }, { models }) => models.product.create({
      name,
      slug,
      price,
      count,
      productCategoryId,
      companyId,
    }),
  },

  Product: {
    productCategory: async (product) => product.getProductCategory(),
    company: async (product) => product.getCompany(),
    features: async (product) => product.getFeatures(),
  },
}

export default resolvers
