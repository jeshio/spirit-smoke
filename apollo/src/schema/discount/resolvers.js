const resolvers = {
  Query: {
    discounts: async (parent, args, { models }) => models.discount.findAll(),
    discount: async (parent, { id }, { models }) => models.discount.findByPk(id),
  },

  Mutation: {
    createDiscount: (parent, {
      input: {
        name,
        percent,
        rub,
        code,
        startDate,
        endDate,
        isGlobal,
      },
    }, { models }) => models.discount.create({
      name,
      percent,
      rub,
      code,
      startDate,
      endDate,
      isGlobal,
    }),
    addProductCategoryDiscount: (parent, { discountId, productCategoryId }, { sequelize, models }) =>
      sequelize.transaction(async (transaction) => {
        const discount = await models.discount.findByPk(discountId, { transaction })
        await discount.addProductCategory(productCategoryId, { transaction })
        return discount
      }),
    addProductDiscount: (parent, { discountId, productId }, { sequelize, models }) =>
      sequelize.transaction(async (transaction) => {
        const discount = await models.discount.findByPk(discountId, { transaction })
        await discount.addProduct(productId, { transaction })
        return discount
      }),
    addFeatureDiscount: (parent, { discountId, featureId }, { sequelize, models }) =>
      sequelize.transaction(async (transaction) => {
        const discount = await models.discount.findByPk(discountId, { transaction })
        await discount.addFeature(featureId, { transaction })
        return discount
      }),
    addOrderDiscount: (parent, { discountId, orderId }, { sequelize, models }) =>
      sequelize.transaction(async (transaction) => {
        const discount = await models.discount.findByPk(discountId, { transaction })
        await discount.addOrder(orderId, { transaction })
        return discount
      }),
  },

  Discount: {
    productCategories: async (discount) => discount.getProductCategories(),
    products: async (discount) => discount.getProducts(),
    features: async (discount) => discount.getFeatures(),
    orders: async (discount) => discount.getOrders(),
  },
}

export default resolvers
