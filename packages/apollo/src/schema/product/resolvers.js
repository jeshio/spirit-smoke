const resolvers = {
  Query: {
    products: async (parent, args, { models }) => models.product.findAll({
      order: [['createdAt', 'DESC'], ['updatedAt', 'DESC'], ['name']],
    }),
    product: async (parent, { id }, { models }) => models.product.findByPk(id),
  },

  Mutation: {
    createProduct: (parent, {
      input: {
        name, slug,
        description,
        imageUrl, price, count, productCategoryId, companyId,
      },
    }, { models }) => models.product.create({
      name,
      slug,
      description,
      imageUrl,
      price,
      count,
      productCategoryId,
      companyId,
    }),
    updateProduct: (parent, {
      id,
      input: {
        name, slug,
        description,
        imageUrl, price, count, productCategoryId, companyId,
      },
    }, { models }) => models.product.update({
      name,
      slug,
      description,
      imageUrl,
      price,
      count,
      productCategoryId,
      companyId,
    }, { where: { id }, returning: true }).then(([, [product]]) => product),
    deleteProduct: (parent, { id }, { models }) => models.product.destroy({
      where: {
        id,
      },
    }).then(() => id),
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
