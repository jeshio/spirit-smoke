import { DataTypes } from 'sequelize'
import { getConnection } from '../db'

const sequelize = getConnection()

const ProductCategory = sequelize.define('productCategory', {
  name: {
    type: DataTypes.STRING,
  },
})

ProductCategory.associate = (models) => {
  ProductCategory.hasMany(models.Product, { onDelete: 'CASCADE' })
}

export default ProductCategory
