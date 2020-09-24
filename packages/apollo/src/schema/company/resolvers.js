const resolvers = {
  Query: {
    companies: async (parent, args, { models }) => models.company.findAll({
      order: [['id', 'DESC']],
    }),
    company: async (parent, { id }, { loaders }) => loaders.company.load(Number(id)),
  },

  Mutation: {
    createCompany: (parent, {
      input: {
        name, country, barcode, color, slug,
      },
    }, { models }) => models.company.create({
      name, country, barcode, color, slug,
    }),
    updateCompany: (parent, {
      id, input: {
        name, country, barcode, color, slug,
      },
    }, { models }) => models.company.update({
      name, country, barcode, color, slug,
    }, {
      where: { id }, returning: true,
    }).then(([, [company]]) => company),
    deleteCompany: (parent, { id }, { models }) => models.company.destroy({
      where: {
        id,
      },
    }).then(() => id),
  },

  Company: {
    products: async (company) => company.getProducts(), // TODO: сделать loader
  },
}

export default resolvers
