import faker from 'faker'
import fakerUnique from '../../utils/fakerUnique'

const devRows = [...Array(21)].map(() => (
  {
    name: faker.company.companyName(),
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
    await queryInterface.bulkInsert('companies', devRows, {})
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('companies', null, {})
  },
}
