const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    static associate(models) {
    }
  }
  OrderProduct.init({
    productsCount: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
        isInt: true,
        min: 1,
      },
    },
  }, {
    sequelize,
    modelName: 'orderProduct',
    timestamps: false,
  })
  return OrderProduct
}
