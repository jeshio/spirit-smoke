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
      await queryInterface.removeColumn('productLines', 'country', { transaction })
      await queryInterface.removeColumn('productLines', 'barcode', { transaction })
      await queryInterface.removeColumn('productLines', 'color', { transaction })
    })
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn('productLines', 'country', {
        type: Sequelize.STRING,
        allowNull: true,
      }, { transaction })
      await queryInterface.addColumn('productLines', 'barcode', {
        type: Sequelize.STRING(48),
        allowNull: true,
      }, { transaction })
      await queryInterface.addColumn('productLines', 'color', {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '#000',
      }, { transaction })
    })
  },
}
