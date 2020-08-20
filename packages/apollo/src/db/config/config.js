const {
  PG_USERNAME,
  PG_PASSWORD,
  PG_DB,
  PG_HOSTNAME,
} = process.env

export const development = {
  username: PG_USERNAME,
  password: PG_PASSWORD,
  database: PG_DB,
  host: PG_HOSTNAME,
  dialect: 'postgres',
  seederStorage: 'sequelize',
  seederStorageTableName: 'SequelizeSeeders',
}
export const test = {
  username: PG_USERNAME,
  password: PG_PASSWORD,
  database: PG_DB,
  host: PG_HOSTNAME,
  dialect: 'postgres',
}
export const production = {
  username: PG_USERNAME,
  password: PG_PASSWORD,
  database: PG_DB,
  host: PG_HOSTNAME,
  dialect: 'postgres',
}
