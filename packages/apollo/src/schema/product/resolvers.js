import isNumberString from '@/utils/isNumberString'
import { keyBy } from 'lodash'

const resolvers = {
  Query: {
    products: async (parent, args, { models }) => models.product.findAll({
      order: [['id', 'DESC']],
    }),
    productsByIds: async (parent, { productIds }, { loaders }) =>
      loaders.product.loadMany(productIds.map((id) => Number(id))),
    productsByCategory: async (parent, { categoryIdSlug }, { models }) => {
      const productCategory = await models.productCategory.findOne({
        include: [
          {
            model: models.product,
            order: [[models.productLine, 'name'], ['name']],
            include: [{ model: models.productLine, attributes: ['name'] }],
          },
        ],
        where: isNumberString(categoryIdSlug) ? {
          id: categoryIdSlug,
        }
          : {
            slug: categoryIdSlug,
          },
      })
      return productCategory?.products || []
    },
    product: async (parent, { id }, { models }) => models.product.findByPk(id),
  },

  Mutation: {
    createProduct: (parent, {
      input: {
        barcode, name, slug,
        description,
        imageUrl, weight, price, count, productCategoryId, productLineId,
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
          productLineId,
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
        imageUrl, weight, price, count, productCategoryId, productLineId,
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
          productLineId,
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
    setProductBarcode: async (parent, {
      id,
      barcode,
    }, { models }) => {
      const updatedProduct = await models.product.update({
        barcode,
      }, { where: { id }, returning: true }).then(([, [product]]) => product)

      return updatedProduct
    },
    deleteProduct: (parent, { id }, { models }) => models.product.destroy({
      where: {
        id,
      },
    }).then(() => id),

    syncAllProductsCount: (_, __, { models }) => models.product.syncAllProductsCount(),
  },

  Product: {
    productCategory: async (product, args, { loaders }) =>
      (product.productCategoryId ? loaders.productCategory.load(product.productCategoryId) : null),
    productLine: async (product, args, { loaders }) =>
      loaders.productLine.load(product.productLineId),
    features: async (product, args, { loaders }) => {
      const productFeatures = await loaders.productFeaturesByProductId.load(product.id)
      const features = await loaders.feature.loadMany(productFeatures.map(({ featureId }) => featureId))
      return features
    },
    discounts: async (product) => product.getDiscounts(),
    orderProducts: async (product) => product.getOrderProducts(),
    productProcurements: async (product, args, { loaders }) => loaders.productProcurementsByProductId.load(product.id),
    productFeatures: async (product, args, { loaders }) => loaders.productFeaturesByProductId.load(product.id),
    priceIsSpecial: (product) => product.price !== null || product.productLineId === null,
    weightIsSpecial: (product) => product.weight !== null || product.productLineId === null,
  },
}

resolvers.Product.price = async (...args) => {
  const [product] = args
  const priceIsSpecial = await resolvers.Product.priceIsSpecial(...args)

  if (priceIsSpecial) {
    return product.price
  }

  const productLine = await resolvers.Product.productLine(...args)

  return productLine.price
}

resolvers.Product.weight = async (...args) => {
  const [product] = args
  const weightIsSpecial = await resolvers.Product.weightIsSpecial(...args)

  if (weightIsSpecial) {
    return product.weight
  }

  const productLine = await resolvers.Product.productLine(...args)

  return productLine.weight
}

resolvers.Product.waitingCount = async (...args) => {
  const [,, { loaders }] = args
  const procurementReadyStatuses = [
    'CANCELED',
    'SUCCESS',
  ]
  const productProcurements = await resolvers.Product.productProcurements(...args)
  const procurements = await loaders.procurement.loadMany(productProcurements.map(({ procurementId }) => procurementId))
  const procurementsById = keyBy(procurements, 'id')

  return productProcurements
    .reduce((base, { count, procurementId }) =>
      (procurementReadyStatuses.includes(procurementsById[procurementId]?.status) ? base : base + count),
    0)
}

export default resolvers
