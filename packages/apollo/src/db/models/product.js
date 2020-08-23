const { numberToPrice } = require('@@utils')

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
      Product.belongsTo(models.company)
      Product.belongsToMany(models.feature, { through: 'productFeatures', timestamps: false })
      Product.belongsToMany(models.discount, { through: 'productDiscounts', timestamps: false })
      Product.belongsToMany(models.order, { through: models.orderProduct, timestamps: false })
      Product.belongsToMany(models.procurement, { through: models.productProcurement, timestamps: false })
      Product.hasMany(models.productProcurement)
      Product.hasMany(models.orderProduct)
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
        is: /^[a-z-\d]+$/,
      },
    },
    price: {
      type: DataTypes.FLOAT,
      set(val) {
        this.setDataValue('price', numberToPrice(val))
      },
      validate: {
        notEmpty: true,
        isFloat: true,
        min: 1,
      },
    },
    count: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 0,
      },
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'product',
  })
  return Product
}
