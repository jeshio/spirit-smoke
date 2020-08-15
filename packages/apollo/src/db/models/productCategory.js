const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductCategory.hasMany(models.product, { onDelete: 'CASCADE' })
      ProductCategory.belongsToMany(models.feature, { through: 'productCategoryFeatures', timestamps: false })
      ProductCategory.belongsToMany(models.discount, { through: 'productCategoryDiscounts', timestamps: false })
    }
  }
  ProductCategory.init({
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
    slug: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        is: /^[a-z-\d]+$/,
      },
    },
  }, {
    sequelize,
    modelName: 'productCategory',
  })
  return ProductCategory
}
