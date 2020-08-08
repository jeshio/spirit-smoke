const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.productCategory)
    }
  }
  Product.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    price: DataTypes.FLOAT,
    count: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'product',
  })
  return Product
}
