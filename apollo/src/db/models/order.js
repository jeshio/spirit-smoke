const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.discount, { through: 'orderDiscounts', timestamps: false })
      Order.belongsToMany(models.product, { through: models.orderProduct, timestamps: false })
    }
  }
  Order.init({
    address: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.STRING,
      values: ['NOT_CONFIRMED', 'CONFIRMED', 'CANCELED', 'SENT', 'FAILURE', 'SUCCESS'],
      defaultValue: 'NOT_CONFIRMED',
    },
    intercomCode: {
      type: DataTypes.STRING,
    },
    personsCount: {
      type: DataTypes.INTEGER,
    },
    comment: {
      type: DataTypes.STRING,
    },
    ourComment: {
      type: DataTypes.STRING,
    },
    deliveryTime: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        is: /^\+7[\d]{10}$/i,
      },
    },
  }, {
    sequelize,
    modelName: 'order',
    paranoid: true,
  })
  return Order
}
