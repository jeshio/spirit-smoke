const resolvers = {
  Query: {
    procurements: async (parent, args, { models }) => models.procurement.findAll(),
    procurement: async (parent, { id }, { models }) => models.procurement.findByPk(id),
  },

  Mutation: {
    createProcurement: (parent, {
      input: {
        nextStatusDate,
        deliveryCost,
      },
    }, { models }) => models.procurement.create({
      nextStatusDate, deliveryCost,
    }),
    addProductProcurement: async (parent, {
      input: {
        productId, procurementId, count, costsInRub,
      },
    }, { models }) => {
      const procurement = await models.procurement.findByPk(procurementId)
      await procurement.addProduct(productId, {
        through: {
          count, costsInRub,
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
