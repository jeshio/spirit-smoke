import faker from 'faker'
import fakerUnique from '../../utils/fakerUnique'

const devRows = [...Array(5)].map((v, i) => (
  {
    name: faker.lorem.words(Math.random() * 3),
    description: faker.lorem.paragraph(1).substr(0, 255),
    slug: fakerUnique(faker.lorem.slug, [Math.random() * 3]),
    priority: Math.round(Math.random() * 3),
    iconUrl: `https://picsum.photos/id/${i + 200 + 1}/512/512`,
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
    await queryInterface.bulkInsert('productCategories', devRows, {})
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('productCategories', null, {})
  },
}
