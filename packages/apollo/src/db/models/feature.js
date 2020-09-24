const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Feature.belongsTo(models.productFeature)
      Feature.belongsToMany(models.productCategory, { through: 'productCategoryFeatures', timestamps: false })
      Feature.belongsToMany(models.product, { through: models.productFeature, timestamps: false })
      Feature.belongsToMany(models.discount, { through: 'featureDiscounts', timestamps: false })
    }
  }
  Feature.init({
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
    imageUrl: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isUrl: true,
      },
    },
    isDisabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'feature',
  })
  return Feature
}
