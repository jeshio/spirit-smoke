const resolvers = {
  Query: {
    procurements: async (parent, params, { models }) =>
      models.procurement.findAll(Object.keys(params).length > 0 ? { where: params } : {}),
    procurement: async (parent, { id }, { models }) => models.procurement.findByPk(id),
  },

  Mutation: {
    createProcurement: async (parent, {
      input: {
        name,
        comment,
        providerInfo,
        nextStatusDate,
        deliveryCost,
        status,
        products,
      },
    }, { sequelize, models }) => sequelize.transaction(async (transaction) => {
      const procurement = await models.procurement.create({
        name,
        comment,
        providerInfo,
        nextStatusDate,
        deliveryCost,
        status,
      }, { transaction, individualHooks: true })
      const promises = products.map(({ id: productId, count, costs }) =>
        procurement.addProduct(productId, {
          transaction,
          through: {
            count, costs,
          },
        }))
      await Promise.all(promises)
      return procurement
    }),
    updateProcurement: (parent, {
      id, input: {
        name,
        comment,
        providerInfo,
        nextStatusDate,
        deliveryCost,
        status,
        products,
      },
    }, { sequelize, models }) => sequelize.transaction(async (transaction) => {
      const updatedProcurement = await models.procurement.update({
        name,
        comment,
        providerInfo,
        nextStatusDate,
        deliveryCost,
        status,
      }, {
        where: { id }, returning: true, transaction, individualHooks: true,
      }).then(([, [procurement]]) => procurement)

      await updatedProcurement.setProducts(null, { transaction })
      const promises = products.map(({ id: productId, count, costs }) =>
        updatedProcurement.addProduct(productId, {
          transaction,
          through: {
            count, costs,
          },
        }))

      await Promise.all(promises)

      return updatedProcurement
    }),
    addProcurementProduct: async (parent, {
      procurementId,
      input: {
        id, count, costs,
      },
    }, { models }) => {
      const procurement = await models.procurement.findByPk(procurementId)
      const productProcurement = await models.productProcurement.findOne({
        where: {
          procurementId,
          productId: id,
        },
      })
      if (productProcurement) {
        await productProcurement.update({
          count: productProcurement.dataValues.count + count,
          ...(costs === null ? {} : { costs }),
        })
      } else {
        await procurement.addProduct(id, {
          through: {
            count, costs: costs || 0,
          },
        })
      }
      return procurement
    },
  },

  Procurement: {
    productProcurements: async (procurement) => procurement.getProductProcurements({
      order: [['count', 'DESC']],
    }),
  },

  ProductProcurement: {
    product: async (productProcurement) => productProcurement.getProduct(),
    procurement: async (productProcurement) => productProcurement.getProcurement(), // TODO: фикс N * N запросов
  },
}

resolvers.Procurement.productsPrice = async (...args) => {
  const productProcurements = await resolvers.Procurement.productProcurements(...args)
  return productProcurements.reduce((base, { costs, count }) => base + (costs || 0) * count, 0)
}

resolvers.Procurement.totalPrice = async (...args) => {
  const [procurement] = args
  const productsPrice = await resolvers.Procurement.productsPrice(...args)
  return procurement.deliveryCost + productsPrice
}

export default resolvers
