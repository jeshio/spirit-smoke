import Product from './product'
import ProductCategory from './productCategory'
import { getConnection } from '../db'

const sequelize = getConnection()

const models = {
  Product,
  ProductCategory,
}

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

models.sequelize = sequelize

export { sequelize }

export default models
