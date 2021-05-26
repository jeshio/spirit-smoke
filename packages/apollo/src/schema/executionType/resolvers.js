const resolvers = {
  Mutation: {
    createExecutionType: (parent, {
      input: {
        productLineId,
        note,
        price,
        weight,
      },
    }, { models }) => models.executionType.create({
      productLineId,
      note,
      price,
      weight,
    }),
    updateExecutionType: (parent, {
      id, input: {
        productLineId,
        note,
        price,
        weight,
      },
    }, { models }) => models.executionType.update({
      productLineId,
      note,
      price,
      weight,
    }, {
      where: { id }, returning: true,
    }).then(([, [executionType]]) => executionType),
    deleteExecutionType: (parent, { id }, { models }) => models.executionType.destroy({
      where: {
        id,
      },
    }).then(() => id),
  },

  ExecutionType: {
    productLine: async (executionType) => executionType.getProductLine(), // TODO: сделать loader
  },
}

export default resolvers
