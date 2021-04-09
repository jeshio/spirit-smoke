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
        name, country, barcode, color, slug,
        weight,
        price,
        productCategoryId,
      },
    }, { models }) => models.productLine.create({
      name,
      country,
      barcode,
      color,
      slug,
      weight,
      price,
      productCategoryId,
    }),
    updateProductLine: (parent, {
      id, input: {
        name, country, barcode, color, slug,
        weight,
        price,
        productCategoryId,
      },
    }, { models }) => models.productLine.update({
      name,
      country,
      barcode,
      color,
      slug,
      weight,
      price,
      productCategoryId,
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
    productCategory: async (productLine, args, { loaders }) =>
      (productLine.productCategoryId ? loaders.productCategory.load(productLine.productCategoryId) : null),
  },
}

export default resolvers
