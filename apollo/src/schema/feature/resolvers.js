const resolvers = {
  Query: {
    features: async (parent, args, { models }) => models.feature.findAll(),
    feature: async (parent, { id }, { models }) => models.feature.findByPk(id),
  },

  Mutation: {
    createFeature: (parent, {
      name, slug, imageUrl, invisible,
    }, { models }) => models.feature.create({
      name, slug, imageUrl, invisible,
    }),

    createProductCategoryFeature: (
      parent,
      {
        name, slug, imageUrl, invisible, productCategoryId,
      },
      { sequelize, models },
    ) =>
      sequelize.transaction(async (transaction) => {
        const feature = await models.feature.create({
          name, slug, imageUrl, invisible,
        }, { transaction })
        await feature.addProductCategory(productCategoryId, { transaction })
        return feature
      }),
    addProductCategoryFeature: (parent, { featureId, productCategoryId }, { sequelize, models }) =>
      sequelize.transaction(async (transaction) => {
        const feature = await models.feature.findByPk(featureId, { transaction })
        await feature.addProductCategory(productCategoryId, { transaction })
        return feature
      }),

    createProductFeature: (
      parent,
      {
        name, slug, imageUrl, invisible, productId,
      },
      { sequelize, models },
    ) =>
      sequelize.transaction(async (transaction) => {
        const feature = await models.feature.create({
          name, slug, imageUrl, invisible,
        }, { transaction })
        await feature.addProduct(productId, { transaction })
        return feature
      }),
    addProductFeature: (parent, { featureId, productId }, { sequelize, models }) =>
      sequelize.transaction(async (transaction) => {
        const feature = await models.feature.findByPk(featureId, { transaction })
        await feature.addProduct(productId, { transaction })
        return feature
      }),
  },

  Feature: {
    productCategories: async (feature) => feature.getProductCategories(),
    products: async (feature) => feature.getProducts(),
  },
}

export default resolvers
