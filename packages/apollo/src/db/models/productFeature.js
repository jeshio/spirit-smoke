const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class ProductFeature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductFeature.belongsTo(models.product)
      ProductFeature.belongsTo(models.feature)
    }
  }
  ProductFeature.init({
    endTime: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
  }, {
    sequelize,
    modelName: 'productFeature',
    timestamps: false,
  })
  return ProductFeature
}
