const resolvers = {
  Query: {
    products: async (parent, args, { models }) => models.product.findAll(),
    product: async (parent, { id }, { models }) => models.product.findByPk(id),
    productCategories: async (parent, args, { models }) => models.productCategory.findAll(),
    productCategory: async (parent, { id }, { models }) => models.productCategory.findByPk(id),
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
    createProductCategory: async (parent, { name, description, slug }, { models }) => models.productCategory.create({
      name, description, slug,
    }),
  },

  Product: {
    productCategoryName: async (product, args, { models }) => {
      const productCategory = await models.productCategory.findByPk(product.productCategoryId)
      return productCategory.dataValues.name
    },
  },

  ProductCategory: {
    products: async (productCategory, args, { models }) => models.product.findAll({
      where: {
        productCategoryId: productCategory.id,
      },
    }),
  },
}

export default resolvers
