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
  Procurement.init({
    deliveryCost: {
      type: DataTypes.FLOAT,
      validate: {
        isFloat: true,
        min: 0,
      },
    },
    status: {
      type: DataTypes.STRING,
      values: ['BUILDING', 'NOT_CONFIRMED', 'CONFIRMED', 'CANCELED', 'SENT', 'FAILURE', 'SUCCESS'],
      defaultValue: 'BUILDING',
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
    paranoid: true,
  })
  return Procurement
}
