import checkDiscount from './helpers/checkDiscount'

const resolvers = {
  Query: {
    discounts: async (parent, args, { models }) => models.discount.findAll(),
    discount: async (parent, { id }, { models }) => models.discount.findByPk(id),
    discountByCode: async (parent, { code }, { models }) => models.discount.findOne({
      where: {
        code,
      },
    }),
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
        isDisposable,
      },
    }, { models }) => models.discount.create({
      name,
      percent,
      rub,
      code,
      startDate,
      endDate,
      isGlobal,
      isDisposable,
    }),
    addProductCategoryDiscount: async (parent, { discountId, productCategoryId }, { models }) => {
      const discount = await models.discount.findByPk(discountId)
      await discount.addProductCategory(productCategoryId)
      return discount
    },
    addProductDiscount: async (parent, { discountId, productId }, { models }) => {
      const discount = await models.discount.findByPk(discountId)
      await discount.addProduct(productId)
      return discount
    },
    addFeatureDiscount: async (parent, { discountId, featureId }, { models }) => {
      const discount = await models.discount.findByPk(discountId)
      await discount.addFeature(featureId)
      return discount
    },
    addOrderDiscount: async (parent, { discountId, orderId }, { models }) => {
      const discount = await models.discount.findByPk(discountId)
      await discount.addOrder(orderId)
      return discount
    },
    addBonusDiscount: async (parent, { discountId, bonusId }, { models }) => {
      const discount = await models.discount.findByPk(discountId)
      await discount.addBonus(bonusId)
      return discount
    },
  },

  Discount: {
    status: async (discount) => {
      const orders = await discount.getOrders({
        where: {
          status: 'SUCCESS',
        },
      })

      return checkDiscount(discount, orders)
    },

    productCategories: async (discount) => discount.getProductCategories(),
    products: async (discount) => discount.getProducts(),
    features: async (discount) => discount.getFeatures(),
    orders: async (discount) => discount.getOrders(),
    bonuses: async (discount) => discount.getBonuses(),
  },
}

export default resolvers
