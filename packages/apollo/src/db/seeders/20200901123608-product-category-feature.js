import getTableIds from '../helpers/getTableIds'

const PRODUCT_CATEGORY_MAX_FEATURES_COUNT = 25
const PRODUCT_CATEGORY_MIN_FEATURES_COUNT = 10
const getDevRows = ({
  productCategoryIds,
  featureIds,
}) => productCategoryIds.reduce((base, productCategoryId) =>
  [
    ...base,
    ...featureIds
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * (PRODUCT_CATEGORY_MAX_FEATURES_COUNT - PRODUCT_CATEGORY_MIN_FEATURES_COUNT)
         + PRODUCT_CATEGORY_MIN_FEATURES_COUNT))
      .map((featureId) => ({
        productCategoryId,
        featureId,
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
    const productCategoryIds = await getTableIds(queryInterface, 'productCategories')
    const featureIds = await getTableIds(queryInterface, 'features')
    const rows = getDevRows({
      productCategoryIds,
      featureIds,
    })
    await queryInterface.bulkInsert('productCategoryFeatures', rows, {})
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productCategoryFeatures', null, {})
  },
}
