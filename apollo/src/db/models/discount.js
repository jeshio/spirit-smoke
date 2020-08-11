const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  discount.init({
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
  })
  return discount
}
