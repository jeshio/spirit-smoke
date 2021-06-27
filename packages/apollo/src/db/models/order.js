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
      Order.belongsToMany(models.bonus, { through: 'orderBonuses', timestamps: false })
      Order.hasMany(models.orderProduct)
    }
  }

  Order.ORDER_STATUSES = {
    NOT_CONFIRMED: 'NOT_CONFIRMED',
    CONFIRMED: 'CONFIRMED',
    CANCELED: 'CANCELED',
    SENT: 'SENT',
    FAILURE: 'FAILURE',
    SUCCESS: 'SUCCESS',
  }

  Order.init({
    address: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      values: Object.values(Order.ORDER_STATUSES),
      defaultValue: Order.ORDER_STATUSES.NOT_CONFIRMED,
    },
    intercomCode: {
      type: DataTypes.STRING,
    },
    personsCount: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
    },
    revenue: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
    },
    comment: {
      type: DataTypes.STRING,
    },
    ourComment: {
      type: DataTypes.STRING,
    },
    deliveryTime: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        is: /^\+7[\d]{10}$/i,
      },
    },
  }, {
    sequelize,
    modelName: 'order',
  })

  Order.addHook('afterSave', (...args) => sequelize.models.product.syncAllProductsCountHook(...args))
  Order.addHook('afterDestroy', (...args) => sequelize.models.product.syncAllProductsCountHook(...args))

  return Order
}
