const resolvers = {
  Query: {
    procurements: async (parent, args, { models }) => models.procurement.findAll(),
    procurement: async (parent, { id }, { models }) => models.procurement.findByPk(id),
  },

  Mutation: {
    createProcurement: async (parent, {
      input: {
        nextStatusDate,
        deliveryCost,
        status,
        products,
      },
    }, { sequelize, models }) => sequelize.transaction(async (transaction) => {
      const procurement = await models.procurement.create({
        nextStatusDate, deliveryCost, status,
      }, { transaction })
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
        nextStatusDate,
        deliveryCost,
        status,
        products,
      },
    }, { sequelize, models }) => sequelize.transaction(async (transaction) => {
      const updatedProcurement = await models.procurement.update({
        nextStatusDate, deliveryCost, status,
      }, {
        where: { id }, returning: true, transaction,
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
    addProductProcurement: async (parent, {
      input: {
        productId, procurementId, count, costs,
      },
    }, { models }) => {
      const procurement = await models.procurement.findByPk(procurementId)
      await procurement.addProduct(productId, {
        through: {
          count, costs,
        },
      })
      return procurement
    },
  },

  Procurement: {
    productProcurements: async (procurement) => procurement.getProductProcurements(),
  },

  ProductProcurement: {
    product: async (productProcurement) => productProcurement.getProduct(),
    procurement: async (productProcurement) => productProcurement.getProcurement(),
  },
}

export default resolvers
