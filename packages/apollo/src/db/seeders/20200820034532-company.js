import faker from 'faker'
import fakerUnique from '../../utils/fakerUnique'

const devRows = [...Array(21)].map(() => (
  {
    name: faker.commerce.department,
    barcode: fakerUnique(faker.finance.bic, [Math.random() * 5], {
      maxRetries: 1000,
    }),
    color: faker.internet.color(),
    country: faker.address.country(),
    slug: fakerUnique(faker.lorem.slug, [Math.random() * 3]),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
))

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
    await queryInterface.bulkInsert('productLines', devRows, {})
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productLines', null, {})
  },
}
