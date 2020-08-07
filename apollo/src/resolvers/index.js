const resolvers = {
  Query: {
    products: async (parent, args, { models }) => models.Product.findAll(),
    product: async (parent, { id }, { models }) => models.Product.findByPk(id),
  },

  Mutation: {
    createProduct: (parent, { name, price, productCategoryId }, { models }) => models.Product.create({
      name,
      price,
      productCategoryId,
    }),
    createProductCategory: async (parent, { name }, { models }) => models.ProductCategory.create({
      name,
    }),
  },

  Product: {
    productCategoryName: async (product, args, { models }) => {
      const productCategory = await models.ProductCategory.findByPk(product.productCategoryId)
      return productCategory.dataValues.name
    },
  },
}

export default resolvers
