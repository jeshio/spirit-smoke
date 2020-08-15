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
    await queryInterface.createTable('productCategoryDiscounts', {
      productCategoryId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'productCategories',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      discountId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'discounts',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    })
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('productCategoryDiscounts')
  },
}
