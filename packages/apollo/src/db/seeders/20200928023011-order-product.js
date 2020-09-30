import faker from 'faker'
import getTableIds from '../helpers/getTableIds'

const ORDER_MIN_PRODUCTS_COUNT = 1
const ORDER_MAX_PRODUCTS_COUNT = 10
const getDevRows = ({
  productIds,
  orderIds,
}) => orderIds.reduce((base, orderId) =>
  [
    ...base,
    ...productIds
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * (ORDER_MAX_PRODUCTS_COUNT - ORDER_MIN_PRODUCTS_COUNT)
         + ORDER_MIN_PRODUCTS_COUNT))
      .map((productId) => ({
        orderId,
        productId,
        productsCount: Math.ceil(Math.random() * 10) + 1,
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
    const productIds = await getTableIds(queryInterface, 'products')
    const orderIds = await getTableIds(queryInterface, 'orders')
    const rows = getDevRows({
      productIds,
      orderIds,
    })
    await queryInterface.bulkInsert('orderProducts', rows, {})
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orderProducts', null, {})
  },
}
