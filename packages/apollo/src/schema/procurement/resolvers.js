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
    productProcurements: async (procurement, params) => procurement.getProductProcurements({
      ...params,
      order: [['count', 'DESC']],
    }),
  },

  ProductProcurement: {
    product: async (productProcurement) => productProcurement.getProduct(),
    procurement: async (productProcurement) => productProcurement.getProcurement(), // TODO: фикс N * N запросов
  },
}

resolvers.Mutation.checkProcurementProducts = (parent, input, ...args) =>
  resolvers.Mutation.updateProcurement(parent, {
    ...input,
    input: {
      ...input.input,
      status: 'SUCCESS',
    },
  }, ...args)

resolvers.Procurement.productsPrice = async (...args) => {
  const productProcurements = await resolvers.Procurement.productProcurements(...args)
  return productProcurements.reduce((base, { costs, count }) => base + (costs || 0) * count, 0)
}

resolvers.Procurement.totalPrice = async (...args) => {
  const [procurement] = args
  const productsPrice = await resolvers.Procurement.productsPrice(...args)
  return procurement.deliveryCost + productsPrice
}

resolvers.Procurement.saleAmount = async (...args) => {
  const [procurement,, { models }] = args
  const productProcurements = await resolvers.Procurement.productProcurements(procurement, {
    include: [
      { model: models.product, attributes: ['price'], include: { model: models.productLine, attributes: ['price'] } },
    ],
  })
  return productProcurements.reduce(
    (base, { count, product: { price, productLine } }) =>
      base + ((price === null ? productLine?.price : price) || 0) * count, 0,
  )
}

resolvers.Procurement.margin = async (...args) => {
  const totalPrice = await resolvers.Procurement.totalPrice(...args)
  const saleAmount = await resolvers.Procurement.saleAmount(...args)
  return Number((saleAmount / totalPrice) * 100 - 100).toFixed(1) || 0
}

resolvers.Procurement.weight = async (...args) => {
  const [procurement,, { models }] = args
  const productProcurements = await resolvers.Procurement.productProcurements(procurement, {
    include: [
      { model: models.product, attributes: ['weight'], include: { model: models.productLine, attributes: ['weight'] } },
    ],
  })
  return productProcurements.reduce(
    (base, { count, product: { weight, productLine } }) =>
      base + ((weight === null ? productLine.weight : weight) || 0) * count,
    0,
  )
}

export default resolvers
