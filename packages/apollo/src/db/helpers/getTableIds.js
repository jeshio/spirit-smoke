/**
   * @typedef {import('sequelize').QueryInterface} QueryInterface
   */

/**
   * @param {QueryInterface} queryInterface
   * @returns
   */
export default async function getTableIds(queryInterface, tableName) {
  const request = await queryInterface.sequelize.query(
    `SELECT id from "${tableName}";`,
  )
  return (request?.[0] || [])
    .map(({ id }) => id)
}
