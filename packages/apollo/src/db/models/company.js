const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Company.hasMany(models.product, { onDelete: 'CASCADE' })
    }
  }
  Company.init({
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
        is: /^[a-z-\d]+$/,
      },
    },
    barcode: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [0, 48],
      },
    },
    country: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        is: /^#(([\dabcdef]{3})|([\dabcdef]{6}))$/i,
      },
      defaultValue: '#000',
    },
  }, {
    sequelize,
    modelName: 'company',
    paranoid: true,
  })
  return Company
}
