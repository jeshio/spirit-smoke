const resolvers = {
  Query: {
    products: async (parent, args, { models }) => models.product.findAll({
      order: [['id', 'DESC']],
    }),
    product: async (parent, { id }, { models }) => models.product.findByPk(id),
  },

  Mutation: {
    createProduct: (parent, {
      input: {
        name, slug,
        description,
        imageUrl, price, count, productCategoryId, companyId,
        features,
      },
    }, { models, sequelize }) =>
      sequelize.transaction(async (transaction) => {
        const createdProduct = await models.product.create({
          name,
          slug,
          description,
          imageUrl,
          price,
          count,
          productCategoryId,
          companyId,
        }, { transaction })

        if (features) {
          await createdProduct.setFeatures(features, { transaction })
        }

        return createdProduct
      }),
    updateProduct: (parent, {
      id,
      input: {
        name, slug,
        description,
        imageUrl, price, count, productCategoryId, companyId,
        features,
      },
    }, { models, sequelize }) =>
      sequelize.transaction(async (transaction) => {
        const sourceProduct = await models.product.findByPk(id)
        const updatedProduct = await models.product.update({
          name,
          slug,
          description,
          imageUrl,
          price,
          count,
          productCategoryId,
          companyId,
        }, { where: { id }, returning: true, transaction }).then(([, [product]]) => product)
        // при смене категории очищаем особенности продукта
        if (Number(sourceProduct?.dataValues.productCategoryId) !== Number(productCategoryId)) {
          await updatedProduct.setFeatures(null, { transaction })
        } else if (features) {
          await updatedProduct.setFeatures(features, { transaction })
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
  },
}

export default resolvers
