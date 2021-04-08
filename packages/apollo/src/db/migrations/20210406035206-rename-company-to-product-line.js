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
      await queryInterface.renameTable('companies', 'productLines', {
        transaction,
      })
      await queryInterface.renameColumn('products', 'companyId', 'productLineId', {
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
      await queryInterface.renameTable('productLines', 'companies', {
        transaction,
      })
      await queryInterface.renameColumn('products', 'productLineId', 'companyId', {
        transaction,
      })
    })
  },
}
