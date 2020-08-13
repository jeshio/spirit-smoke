const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Bonus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bonus.belongsToMany(models.order, { through: 'orderBonuses', timestamps: false })
      Bonus.belongsToMany(models.discount, { through: 'bonusDiscounts', timestamps: false })
    }
  }
  Bonus.init({
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
        is: /^[a-z-\d]+$/i,
      },
    },
    conditionsDescription: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    iconUrl: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isUrl: true,
      },
    },
  }, {
    sequelize,
    modelName: 'bonus',
    name: {
      singular: 'bonus',
      plural: 'bonuses',
    },
    tableName: 'bonuses',
  })
  return Bonus
}
