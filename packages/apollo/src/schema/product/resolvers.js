import isNumberString from '@/utils/isNumberString'

const resolvers = {
  Query: {
    products: async (parent, args, { models }) => models.product.findAll({
      order: [['id', 'DESC']],
    }),
    productsByCategory: async (parent, { categoryIdSlug }, { models }) => {
      const productCategory = await models.productCategory.findOne({
        include: [
          {
            model: models.product,
            order: [[models.company, 'name'], ['name']],
            include: [{ model: models.company, attributes: ['name'] }],
          },
        ],
        where: isNumberString(categoryIdSlug) ? {
          id: categoryIdSlug,
        }
          : {
            slug: categoryIdSlug,
          },
      })
      return productCategory.products || []
    },
    product: async (parent, { id }, { models }) => models.product.findByPk(id),
  },

  Mutation: {
    createProduct: (parent, {
      input: {
        barcode, name, slug,
        description,
        imageUrl, weight, price, count, productCategoryId, companyId,
        features,
      },
    }, { models, sequelize }) =>
      sequelize.transaction(async (transaction) => {
        const createdProduct = await models.product.create({
          barcode,
          name,
          slug,
          description,
          imageUrl,
          weight,
          price,
          count,
          productCategoryId,
          companyId,
        }, { transaction })

        if (features) {
          const featurePromises = features.map(({ featureId, endTime }) => createdProduct.addFeature(featureId, {
            transaction,
            through: {
              endTime,
            },
          }))

          await Promise.all(featurePromises)
        }

        return createdProduct
      }),
    updateProduct: (parent, {
      id,
      input: {
        barcode, name, slug,
        description,
        imageUrl, weight, price, count, productCategoryId, companyId,
        features,
      },
    }, { models, sequelize }) =>
      sequelize.transaction(async (transaction) => {
        const sourceProduct = await models.product.findByPk(id)
        const updatedProduct = await models.product.update({
          barcode,
          name,
          slug,
          description,
          imageUrl,
          weight,
          price,
          count,
          productCategoryId,
          companyId,
        }, { where: { id }, returning: true, transaction }).then(([, [product]]) => product)
        // при смене категории очищаем особенности продукта
        if (Number(sourceProduct?.dataValues.productCategoryId) !== Number(productCategoryId)) {
          await updatedProduct.setFeatures(null, { transaction })
        } else if (features) {
          await updatedProduct.setFeatures(null, { transaction })
          const featurePromises = features.map(({ featureId, endTime }) => updatedProduct.addFeature(featureId, {
            transaction,
            through: {
              endTime,
            },
          }))

          await Promise.all(featurePromises)
        }

        return updatedProduct
      }),
    deleteProduct: (parent, { id }, { models }) => models.product.destroy({
      where: {
        id,
      },
    }).then(() => id),
  },

  Product: {
    productCategory: async (product, args, { loaders }) =>
      loaders.productCategory.load(product.productCategoryId),
    company: async (product, args, { loaders }) =>
      loaders.company.load(product.companyId),
    features: async (product, args, { loaders }) => {
      const featureIds = await loaders.featureIdsByProduct.load(product.id)
      const features = await loaders.feature.loadMany(featureIds)
      return features
    },
    discounts: async (product) => product.getDiscounts(),
    orderProducts: async (product) => product.getOrderProducts(),
    productProcurements: async (product) => product.getProductProcurements(),
    productFeatures: async (product) => product.getProductFeatures(),
  },
}

export default resolvers
