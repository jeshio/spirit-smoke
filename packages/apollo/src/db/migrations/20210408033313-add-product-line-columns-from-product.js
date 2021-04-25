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
      await queryInterface.addColumn('productLines', 'weight', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }, { transaction })
      await queryInterface.addColumn('productLines', 'price', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      }, { transaction })
      await queryInterface.addColumn(
        'productLines',
        'productCategoryId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'productCategories',
            key: 'id',
          },
          defaultValue: null,
          allowNull: true,
          onDelete: 'CASCADE',
        }, { transaction },
      )
    })
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn('productLines', 'weight', { transaction })
      await queryInterface.removeColumn('productLines', 'price', { transaction })
      await queryInterface.removeConstraint('productLines', 'productLines_productCategoryId_fkey', { transaction })
      await queryInterface.removeColumn('productLines', 'productCategoryId', { transaction })
    })
  },
}
