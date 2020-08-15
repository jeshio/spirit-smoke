const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Promotion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Promotion.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    imageUrl: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isUrl: true,
      },
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
    priority: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'promotion',
  })
  return Promotion
}
