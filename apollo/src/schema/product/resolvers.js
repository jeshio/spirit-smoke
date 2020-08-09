const resolvers = {
  Query: {
    products: async (parent, args, { models }) => models.product.findAll(),
    product: async (parent, { id }, { models }) => models.product.findByPk(id),
  },

  Mutation: {
    createProduct: (parent, {
      name, slug, price, count, productCategoryId,
    }, { models }) => models.product.create({
      name,
      slug,
      price,
      count,
      productCategoryId,
    }),
  },

  Product: {
    productCategoryName: async (product, args, { models }) => {
      const productCategory = await models.productCategory.findByPk(product.productCategoryId)
      return productCategory.dataValues.name
    },
  },
}

export default resolvers
