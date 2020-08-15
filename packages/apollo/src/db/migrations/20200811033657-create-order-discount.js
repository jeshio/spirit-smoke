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
    await queryInterface.createTable('orderDiscounts', {
      orderId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'orders',
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
    await queryInterface.dropTable('orderDiscounts')
  },
}
