import faker from 'faker'
import fakerUnique from '../../utils/fakerUnique'
import getRandomElement from '../../utils/getRandomElement'
import getTableIds from '../helpers/getTableIds'

const getDevRows = ({
  productCategoryIds,
  companyIds,
}) => [...Array(500)].map((v, i) => (
  {
    barcode: fakerUnique(faker.finance.bic, [Math.random() * 5], {
      maxRetries: 1000,
    }),
    name: faker.commerce.product(),
    slug: fakerUnique(faker.lorem.slug, [Math.random() * 5], {
      maxRetries: 1000,
    }),
    description: faker.lorem.paragraph(Math.round(Math.random() * 2 + 1)).substr(0, 250),
    imageUrl: `https://picsum.photos/id/${i + 1}/512/512`,
    weight: Math.round(Math.random() * 1000),
    price: Math.round(Math.max(Math.random() * 25 - 1, 0)),
    count: Math.floor(Math.random() * 11),
    productCategoryId: getRandomElement(productCategoryIds),
    companyId: getRandomElement(companyIds),
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
    const productCategoryIds = await getTableIds(queryInterface, 'productCategories')
    const companyIds = await getTableIds(queryInterface, 'companies')
    await queryInterface.bulkInsert('products', getDevRows({
      productCategoryIds,
      companyIds,
    }), {})
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {})
  },
}
