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
      await queryInterface.changeColumn('products', 'price', {
        type: Sequelize.INTEGER,
        allowNull: true,
      }, { transaction })
      await queryInterface.changeColumn('products', 'weight', {
        type: Sequelize.INTEGER,
        allowNull: true,
      }, { transaction })
      await queryInterface.changeColumn(
        'products',
        'productCategoryId',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: null,
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
      await queryInterface.changeColumn('products', 'price', {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, { transaction })
      await queryInterface.changeColumn('products', 'weight', {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      }, { transaction })
      await queryInterface.changeColumn(
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
        }, { transaction },
      )
    })
  },
}
