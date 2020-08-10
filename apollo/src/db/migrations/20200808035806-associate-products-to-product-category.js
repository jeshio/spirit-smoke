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
    await queryInterface.addColumn(
      'products',
      'productCategoryId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'productCategories',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
      },
    )
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.removeConstraint('products', 'products_productCategoryId_fkey', { transaction: t })
      await queryInterface.removeColumn('products', 'productCategoryId', { transaction: t })
    })
  },
}
