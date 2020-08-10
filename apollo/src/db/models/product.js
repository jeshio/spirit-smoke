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
      Product.belongsToMany(models.feature, { through: 'productFeatures', timestamps: false })
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    slug: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: DataTypes.FLOAT,
      validate: {
        notEmpty: true,
        isFloat: true,
        min: 1,
      },
    },
    count: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
        isInt: true,
        min: 0,
      },
    },
  }, {
    sequelize,
    modelName: 'product',
  })
  return Product
}
