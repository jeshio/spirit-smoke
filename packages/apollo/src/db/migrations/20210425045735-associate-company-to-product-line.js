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
      'productLines',
      'companyId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'companies',
          key: 'id',
        },
        allowNull: true,
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
      await queryInterface.removeConstraint('productLines', 'productLines_companyId_fkey', { transaction: t })
      await queryInterface.removeColumn('productLines', 'companyId', { transaction: t })
    })
  },
}
