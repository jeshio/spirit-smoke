import isNumberString from '@/utils/isNumberString'

const resolvers = {
  Query: {
    productCategories: async (parent, args, { models }) => models.productCategory.findAll({
      order: [['priority', 'DESC'], ['id', 'DESC']],
    }),
    productCategory: async (parent, { idSlug }, { models }) => models.productCategory.findOne({
      where: isNumberString(idSlug) ? {
        id: idSlug,
      }
        : {
          slug: idSlug,
        },
      order: [['id', 'DESC']],
    }),
  },

  Mutation: {
    createProductCategory: async (parent, {
      input: {
        name, priority, iconUrl, description, slug, features,
      },
    }, { models, sequelize }) =>
      sequelize.transaction(async (transaction) => {
        const createdProductCategory = await models.productCategory.create({
          name, priority, iconUrl, description, slug,
        }, { transaction })

        if (features) {
          await createdProductCategory.setFeatures(features, { transaction })
        }

        return createdProductCategory
      }),
    updateProductCategory: (parent, {
      id,
      input: {
        name, priority, iconUrl, slug,
        description,
        features,
      },
    }, { models, sequelize }) =>
      sequelize.transaction(async (transaction) => {
        const updatedProductCategory = await models.productCategory.update({
          name,
          priority,
          iconUrl,
          slug,
          description,
        }, { where: { id }, returning: true, transaction }).then(([, [productCategory]]) => productCategory)

        if (features) {
          await updatedProductCategory.setFeatures(features, { transaction })
        }

        return updatedProductCategory
      }),
    deleteProductCategory: (parent, { id }, { models }) => models.productCategory.destroy({
      where: {
        id,
      },
    }).then(() => id),
  },

  ProductCategory: {
    products: async (productCategory) => productCategory.getProducts(),
    features: async (productCategory, args, { loaders }) => {
      const featureIds = await loaders.featureIdsByProductCategory.load(productCategory.id)
      const features = await loaders.feature.loadMany(featureIds)
      return features
    },
    discounts: async (productCategory) => productCategory.getDiscounts(),
  },
}

export default resolvers
