const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class ExecutionType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ExecutionType.belongsTo(models.productLine)
      ExecutionType.hasMany(models.product, { onDelete: 'CASCADE' })
    }
  }
  ExecutionType.init({
    productLineId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      },
    },
    note: {
      validate: {
        notEmpty: true,
      },
      type: DataTypes.STRING(255),
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'executionType',
    tableName: 'executionTypes',
    timestamps: false,
  })
  return ExecutionType
}
