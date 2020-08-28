import faker from 'faker'
import fakerUnique from '../../utils/fakerUnique'

const devRows = [...Array(70)].map((v, i) => {
  const slug = fakerUnique(faker.lorem.slug, [Math.random() * 5])
  return {
    name: faker.commerce.productMaterial(),
    slug,
    imageUrl: `https://picsum.photos/id/${i + 500}/128/128`,
    invisible: Math.random() > 0.85,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})

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
    await queryInterface.bulkInsert('features', devRows, {})
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('features', null, {})
  },
}
