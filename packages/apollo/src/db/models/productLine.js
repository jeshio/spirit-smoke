const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class ProductLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductLine.hasMany(models.product, { onDelete: 'CASCADE' })
      ProductLine.hasMany(models.executionType, { onDelete: 'CASCADE' })
      ProductLine.belongsTo(models.productCategory)
      ProductLine.belongsTo(models.company)
    }
  }
  ProductLine.init({
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
    weight: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 0,
      },
      defaultValue: 0,
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 0,
      },
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'productLine',
  })
  return ProductLine
}
