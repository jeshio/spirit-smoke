const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Discount.belongsToMany(models.productCategory, { through: 'productCategoryDiscounts', timestamps: false })
      Discount.belongsToMany(models.product, { through: 'productDiscounts', timestamps: false })
      Discount.belongsToMany(models.feature, { through: 'featureDiscounts', timestamps: false })
    }
  }
  Discount.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    percent: {
      type: DataTypes.FLOAT,
      validate: {
        isFloat: true,
        min: 0,
        max: 100,
      },
    },
    rub: {
      type: DataTypes.FLOAT,
      validate: {
        isFloat: true,
        min: 0,
      },
    },
    code: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: true,
        isDate: true,
      },
    },
    endDate: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: true,
        isDate: true,
      },
    },
    isGlobal: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'discount',
    paranoid: true,
  })
  return Discount
}
