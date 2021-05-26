const resolvers = {
  Query: {
    productLines: async (parent, args, { models }) => models.productLine.findAll({
      order: [['id', 'DESC']],
    }),
    productLine: async (parent, { id }, { loaders }) => loaders.productLine.load(Number(id)),
  },

  Mutation: {
    createProductLine: (parent, {
      input: {
        name, slug,
        weight,
        price,
        productCategoryId,
        companyId,
      },
    }, { models }) => models.productLine.create({
      name,
      slug,
      weight,
      price,
      productCategoryId,
      companyId,
    }),
    updateProductLine: (parent, {
      id, input: {
        name, slug,
        weight,
        price,
        productCategoryId,
        companyId,
      },
    }, { models }) => models.productLine.update({
      name,
      slug,
      weight,
      price,
      productCategoryId,
      companyId,
    }, {
      where: { id }, returning: true,
    }).then(([, [productLine]]) => productLine),
    deleteProductLine: (parent, { id }, { models }) => models.productLine.destroy({
      where: {
        id,
      },
    }).then(() => id),
  },

  ProductLine: {
    products: async (productLine) => productLine.getProducts(), // TODO: сделать loader
    executionTypes: async (productLine) => productLine.getExecutionTypes(), // TODO: сделать loader
    productCategory: async (productLine, args, { loaders }) =>
      (productLine.productCategoryId ? loaders.productCategory.load(productLine.productCategoryId) : null),
    company: async (productLine, args, { loaders }) =>
      (productLine.companyId ? loaders.company.load(productLine.companyId) : null),
  },
}

export default resolvers
