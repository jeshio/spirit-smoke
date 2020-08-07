import Sequelize from 'sequelize'

const {
  PG_USERNAME,
  PG_PASSWORD,
  PG_DB,
  PG_HOSTNAME,
} = process.env

let connection = null

export const getConnection = () => {
  if (!connection) {
    connection = new Sequelize(
      PG_DB,
      PG_USERNAME,
      PG_PASSWORD,
      {
        host: PG_HOSTNAME,
        dialect: 'postgres',
      },
    )
    console.log('PG is connected!')
  }

  return connection
}

export default getConnection
