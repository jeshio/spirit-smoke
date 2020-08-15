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
    await queryInterface.createTable('productProcurements', {
      procurementId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'procurements',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
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
      count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      costs: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    })
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('productProcurements')
  },
}
