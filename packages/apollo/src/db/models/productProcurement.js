const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class ProductProcurement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductProcurement.belongsTo(models.product)
      ProductProcurement.belongsTo(models.procurement)
    }
  }
  ProductProcurement.init({
    count: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
        isInt: true,
        min: 1,
      },
    },
    costs: {
      type: DataTypes.FLOAT,
      validate: {
        notEmpty: true,
        isFloat: true,
        min: 0,
      },
    },
  }, {
    sequelize,
    modelName: 'productProcurement',
    timestamps: false,
  })
  return ProductProcurement
}
