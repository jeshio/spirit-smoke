import faker from 'faker'

const PRODUCT_MAX_FEATURES_COUNT = 7
const PRODUCT_MIN_FEATURES_COUNT = 0
const getDevRows = ({
  products,
  productCategoryFeatures,
}) => products.reduce((base, product) =>
  [
    ...base,
    ...productCategoryFeatures
      .filter((productCategoryFeature) => productCategoryFeature.productCategoryId === product.productCategoryId)
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * (PRODUCT_MAX_FEATURES_COUNT - PRODUCT_MIN_FEATURES_COUNT)
         + PRODUCT_MIN_FEATURES_COUNT))
      .map((productCategoryFeature) => ({
        productId: product.id,
        featureId: productCategoryFeature.featureId,
        endTime: Math.random() > 0.75 ? faker.date.future() : undefined,
      })),
  ], [])

module.exports = {
  /**
   * @typedef {import('sequelize')} Sequelize
   * @typedef {import('sequelize').QueryInterface} QueryInterface
   */

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  up: async (queryInterface, Sequelize) => {
    // Добавляем продукты только те фичи, которые принадлежат их категориям
    const productsRequest = await queryInterface.sequelize.query(
      'SELECT id, "productCategoryId" from "products";',
    )
    const productCategoryFeaturesRequest = await queryInterface.sequelize.query(
      'SELECT * from "productCategoryFeatures";',
    )
    const products = productsRequest[0]
    const productCategoryFeatures = productCategoryFeaturesRequest[0]
    const rows = getDevRows({
      products,
      productCategoryFeatures,
    })
    await queryInterface.bulkInsert('productFeatures', rows, {})
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productFeatures', null, {})
  },
}
