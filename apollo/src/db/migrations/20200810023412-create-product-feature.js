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
    await queryInterface.createTable('productFeatures', {
      productId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      featureId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'features',
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
    await queryInterface.dropTable('productFeatures')
  },
}
