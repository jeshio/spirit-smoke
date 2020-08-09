const resolvers = {
  Query: {
    productCategories: async (parent, args, { models }) => models.productCategory.findAll(),
    productCategory: async (parent, { id }, { models }) => models.productCategory.findByPk(id),
  },

  Mutation: {
    createProductCategory: async (parent, { name, description, slug }, { models }) => models.productCategory.create({
      name, description, slug,
    }),
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
