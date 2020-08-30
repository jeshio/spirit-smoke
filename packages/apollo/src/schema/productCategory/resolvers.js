const resolvers = {
  Query: {
    productCategories: async (parent, args, { models }) => models.productCategory.findAll(),
    productCategory: async (parent, { id }, { models }) => models.productCategory.findByPk(id),
  },

  Mutation: {
    createProductCategory: async (parent, { input: { name, description, slug } }, { models }) =>
      models.productCategory.create({
        name, description, slug,
      }),
    updateProductCategory: (parent, {
      id,
      input: {
        name, slug,
        description,
      },
    }, { models }) => models.productCategory.update({
      name,
      slug,
      description,
    }, { where: { id }, returning: true }).then(([, [productCategory]]) => productCategory),
    deleteProductCategory: (parent, { id }, { models }) => models.productCategory.destroy({
      where: {
        id,
      },
    }).then(() => id),
  },

  ProductCategory: {
    products: async (productCategory) => productCategory.getProducts(),
    features: async (productCategory) => productCategory.getFeatures(),
    discounts: async (productCategory) => productCategory.getDiscounts(),
  },
}

export default resolvers
