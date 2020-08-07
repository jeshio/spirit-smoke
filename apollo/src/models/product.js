import { DataTypes } from 'sequelize'
import { getConnection } from '../db'

const sequelize = getConnection()

const Product = sequelize.define('product', {
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
})

export default Product
