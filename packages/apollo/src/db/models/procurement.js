const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Procurement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Procurement.belongsToMany(models.product, { through: models.productProcurement, timestamps: false })
      Procurement.hasMany(models.productProcurement)
    }
  }

  Procurement.PROCUREMENT_STATUSES = {
    BUILDING: 'BUILDING',
    NOT_CONFIRMED: 'NOT_CONFIRMED',
    CONFIRMED: 'CONFIRMED',
    CANCELED: 'CANCELED',
    SENT: 'SENT',
    FAILURE: 'FAILURE',
    SUCCESS: 'SUCCESS',
  }

  Procurement.init({
    deliveryCost: {
      type: DataTypes.FLOAT,
      validate: {
        isFloat: true,
        min: 0,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    providerInfo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '-',
    },
    status: {
      type: DataTypes.STRING,
      values: Object.values(Procurement.PROCUREMENT_STATUSES),
      defaultValue: Procurement.PROCUREMENT_STATUSES.BUILDING,
    },
    nextStatusDate: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
  }, {
    sequelize,
    modelName: 'procurement',
  })

  Procurement.addHook('afterSave', (...args) => sequelize.models.product.syncAllProductsCountHook(...args))
  Procurement.addHook('afterDestroy', (...args) => sequelize.models.product.syncAllProductsCountHook(...args))

  return Procurement
}
