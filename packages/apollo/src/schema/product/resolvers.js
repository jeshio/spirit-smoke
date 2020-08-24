const resolvers = {
  Query: {
    products: async (parent, args, { models }) => models.product.findAll({
      order: [['createdAt', 'DESC']],
    }),
    product: async (parent, { id }, { models }) => models.product.findByPk(id),
  },

  Mutation: {
    createProduct: (parent, {
      input: {
        name, slug, price, count, productCategoryId, companyId,
      },
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
    productCategory: async (product, args, { loaders }) =>
      loaders.productCategory.load(product.productCategoryId),
    company: async (product) => product.getCompany(),
    features: async (product) => product.getFeatures(),
    discounts: async (product) => product.getDiscounts(),
    orderProducts: async (product) => product.getOrderProducts(),
    productProcurements: async (product) => product.getProductProcurements(),
  },
}

export default resolvers
