const resolvers = {
  Query: {
    products: async (parent, args, { models }) => models.product.findAll(),
    product: async (parent, { id }, { models }) => models.product.findByPk(id),
  },

  Mutation: {
    createProduct: (parent, {
      name, slug, price, count, productCategoryId,
    }, { models }) => models.product.create({
      name,
      slug,
      price,
      count,
      productCategoryId,
    }),
  },

  Product: {
    productCategory: async (product) => product.getProductCategory(),
    features: async (product) => product.getFeatures(),
  },
}

export default resolvers
