import faker from 'faker'
import fakerUnique from '../../utils/fakerUnique'
import getRandomElement from '../../utils/getRandomElement'
import getTableIds from '../helpers/getTableIds'

const STATUSES = [
  'NOT_CONFIRMED', 'CONFIRMED', 'CANCELED', 'SENT', 'FAILURE', 'SUCCESS',
]

const devRows = [...Array(80)].map(() => (
  {
    address: faker.address.streetAddress(true),
    status: STATUSES[Math.round(Math.random() * (STATUSES.length - 1))],
    intercomCode: Math.random() > 0.5 ? faker.internet.password(4, false, /\d/) : undefined,
    personsCount: Math.random() > 0.5 ? Math.round(Math.random() * 10) : undefined,
    comment: Math.random() < 0.3 ? faker.lorem.words(Math.round(Math.random() * 15)) : undefined,
    ourComment: Math.random() < 0.1 ? faker.lorem.words(Math.round(Math.random() * 15)) : undefined,
    deliveryTime: Math.random() > 0.8 ? faker.date.future(0) : faker.date.past(),
    phoneNumber: faker.phone.phoneNumber('+7##########'),
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
    await queryInterface.bulkInsert('orders', devRows, {})
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {})
  },
}
