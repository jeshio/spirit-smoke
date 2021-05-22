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
      await queryInterface.addColumn('products', 'executionTypeId', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'executionTypes',
          key: 'id',
        },
        onDelete: 'CASCADE',
      }, { transaction })
      await queryInterface.addColumn('products', 'originalProductId', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'products',
          key: 'id',
        },
        onDelete: 'CASCADE',
      }, { transaction })
    })
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeConstraint('products', 'products_executionTypeId_fkey', { transaction })
      await queryInterface.removeColumn('products', 'executionTypeId', { transaction })
      await queryInterface.removeConstraint('products', 'products_originalProductId_fkey', { transaction })
      await queryInterface.removeColumn('products', 'originalProductId', { transaction })
    })
  },
}
