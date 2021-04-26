const { Op } = require('sequelize')
const { QueryTypes } = require('sequelize')

const {
  Model,
  col,
  fn,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.productCategory, { foreignKey: { allowNull: true } })
      Product.belongsTo(models.productLine)
      Product.belongsToMany(models.feature, { through: models.productFeature, timestamps: false })
      Product.belongsToMany(models.discount, { through: 'productDiscounts', timestamps: false })
      Product.belongsToMany(models.order, { through: models.orderProduct, timestamps: false })
      Product.belongsToMany(models.procurement, { through: models.productProcurement, timestamps: false })
      Product.hasMany(models.productFeature)
      Product.hasMany(models.productProcurement)
      Product.hasMany(models.orderProduct)
    }

    // TODO: можно добавить необязательные аргументы - id поставки,которая изменилась и
    // id заказа, и изменять только продукты связанные с ними
    static async syncAllProductsCount() {
      // #region 1. собрать все поставки всех продуктов и сложить
      const productProcurements = await sequelize.models.productProcurement.findAll({
        group: ['productId', 'procurement.id'],
        attributes: ['productId', [fn('SUM', col('count')), 'totalCount']],
        where: {
          '$procurement.status$': sequelize.models.procurement.PROCUREMENT_STATUSES.SUCCESS,
        },
        include: [
          {
            model: sequelize.models.procurement,
            attributes: ['status'],
          },
        ],
        raw: true,
        nest: true,
      })
      const procurementsCountByProductId = productProcurements.reduce((base, item) => ({
        ...base,
        [item.productId]: (base[item.productId] || 0) + Number(item.totalCount),
      }), {})
      // #endregion

      // #region  2. собрать все заказы продуктов и сложить
      const orders = await sequelize.models.orderProduct.findAll({
        group: ['productId', 'order.id'],
        attributes: ['productId', [fn('SUM', col('productsCount')), 'totalCount']],
        where: {
          '$order.status$': {
            [Op.notIn]: [sequelize.models.order.ORDER_STATUSES.CANCELED, sequelize.models.order.ORDER_STATUSES.FAILURE],
          },
        },
        include: [
          {
            model: sequelize.models.order,
            attributes: ['status'],
          },
        ],
        raw: true,
        nest: true,
      })
      const ordersCountByProductId = orders.reduce((base, item) => ({
        ...base,
        [item.productId]: (base[item.productId] || 0) + Number(item.totalCount),
      }), {})
      // #endregion

      // #region 3. вычесть из первого второе и сохранить в продукты
      const products = await sequelize.models.product.findAll({
        raw: true,
      })
      const newProducts = products.map(({ id, ...item }) => ({
        id,
        ...item,
        count: (procurementsCountByProductId[id] || 0) - (ordersCountByProductId[id] || 0),
      }))
      const productsQueryItems = newProducts.map(({ id, count }) => `(${id}, ${count}, NOW())`).join(', ')
      const productsQuery = `UPDATE "${sequelize.models.product.tableName}" AS t SET
        "count" = c."count",
        "updatedAt" = c."updatedAt"
        FROM (VALUES
          ${productsQueryItems} 
        ) AS c("id", "count", "updatedAt")
        WHERE c."id" = t."id" AND c."count" != t."count"
      `
      await sequelize.query(productsQuery, {
        type: QueryTypes.UPDATE,
      })
      // #endregion
    }

    static syncAllProductsCountHook(_, options) {
      return (options?.transaction ? options.transaction.afterCommit(this.syncAllProductsCount)
        : this.syncAllProductsCount())
    }
  }
  Product.init({
    barcode: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [0, 48],
      },
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    imageUrl: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isUrl: true,
      },
      defaultValue: 'http://example.com/',
    },
    slug: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        is: /^[a-z-\d]+$/,
      },
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 0,
      },
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 0,
      },
    },
    count: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 0,
      },
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'product',
    paranoid: true,
  })
  return Product
}
