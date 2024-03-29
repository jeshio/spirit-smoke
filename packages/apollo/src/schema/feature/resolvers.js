const resolvers = {
  Query: {
    features: async (parent, args, { models }) => models.feature.findAll({
      order: [['id', 'DESC']],
    }),
    feature: async (parent, { id }, { loaders }) => loaders.feature.load(Number(id)),
  },

  Mutation: {
    createFeature: (parent, {
      input: {
        name, slug, imageUrl, isDisabled,
      },
    }, { models }) => models.feature.create({
      name, slug, imageUrl, isDisabled,
    }),
    updateFeature: (parent, {
      id, input: {
        name, slug, imageUrl, isDisabled,
      },
    }, { models }) => models.feature.update({
      name, slug, imageUrl, isDisabled,
    }, {
      where: { id }, returning: true,
    }).then(([, [feature]]) => feature),
    addProductCategoryFeature: (parent, { featureId, productCategoryId }, { sequelize, models }) =>
      sequelize.transaction(async (transaction) => {
        const feature = await models.feature.findByPk(featureId, { transaction })
        await feature.addProductCategory(productCategoryId, { transaction })
        return feature
      }),
    addProductFeature: (parent, { featureId, productId, endTime }, { sequelize, models }) =>
      sequelize.transaction(async (transaction) => {
        const feature = await models.feature.findByPk(featureId, { transaction })
        // TODO добавить проверку, что у категории этого продукта есть эта особенность
        await feature.addProduct(productId, {
          transaction,
          through: {
            endTime,
          },
        })
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
    productFeatures: async (feature) => feature.getProductFeatures(),
    discounts: async (feature) => feature.getDiscounts(),
  },

  ProductFeature: {
    product: async (productFeature) => productFeature.getProduct(),
    feature: async (productFeature, args, { loaders }) => loaders.feature.load(productFeature.featureId),
  },
}

export default resolvers
