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
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeConstraint('products', 'products_companyId_fkey', {
        transaction,
      })
      await queryInterface.addConstraint('products', {
        fields: ['productLineId'],
        name: 'products_productLineId_fkey',
        type: 'foreign key',
        references: {
          field: 'id',
          table: 'productLines',
        },
        transaction,
      })
    })
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeConstraint('products', 'products_productLineId_fkey', {
        transaction,
      })
      await queryInterface.addConstraint('products', {
        fields: ['productLineId'],
        name: 'products_companyId_fkey',
        type: 'foreign key',
        references: {
          field: 'id',
          table: 'productLines',
        },
        transaction,
      })
    })
  },
}
