const resolvers = {
  Query: {
    features: async (parent, args, { models }) => models.feature.findAll(),
    feature: async (parent, { id }, { models }) => models.feature.findByPk(id),
  },

  Mutation: {
    createFeature: (parent, {
      name, slug, imageUrl, isDisabled,
    }, { models }) => models.feature.create({
      name, slug, imageUrl, isDisabled,
    }),
    addProductCategoryFeature: (parent, { featureId, productCategoryId }, { sequelize, models }) =>
      sequelize.transaction(async (transaction) => {
        const feature = await models.feature.findByPk(featureId, { transaction })
        await feature.addProductCategory(productCategoryId, { transaction })
        return feature
      }),
    addProductFeature: (parent, { featureId, productId }, { sequelize, models }) =>
      sequelize.transaction(async (transaction) => {
        const feature = await models.feature.findByPk(featureId, { transaction })
        // TODO добавить проверку, что у категории этого продукта есть эта особенность
        await feature.addProduct(productId, { transaction })
        return feature
      }),
    deleteFeature: (parent, { id }, { models }) => models.feature.destroy({
      where: {
        id,
      },
    }).then(() => id),
  },

  Feature: {
    productCategories: async (feature) => feature.getProductCategories(),
    products: async (feature) => feature.getProducts(),
    discounts: async (feature) => feature.getDiscounts(),
  },
}

export default resolvers
