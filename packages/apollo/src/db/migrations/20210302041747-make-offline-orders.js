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
    queryInterface.changeColumn('orders', 'address', {
      type: Sequelize.STRING,
      allowNull: true,
    })
    queryInterface.changeColumn('orders', 'deliveryTime', {
      type: Sequelize.DATE,
      allowNull: true,
    })
    queryInterface.changeColumn('orders', 'phoneNumber', {
      type: Sequelize.STRING,
      allowNull: true,
    })
  },

  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns
   */
  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('orders', 'address', {
      type: Sequelize.STRING,
      allowNull: false,
    })
    queryInterface.changeColumn('orders', 'deliveryTime', {
      type: Sequelize.DATE,
      allowNull: false,
    })
    queryInterface.changeColumn('orders', 'phoneNumber', {
      type: Sequelize.STRING,
      allowNull: false,
    })
  },
}
