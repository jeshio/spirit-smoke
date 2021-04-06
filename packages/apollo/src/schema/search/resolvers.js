import handleError from '@/utils/handleError'
import resolveType from '@/utils/resolveTypes'

const resolvers = {
  Query: {
    searchByBarcode: async (parent, { barcode }, { models }) => models.product.findOne({
      where: {
        barcode,
      },
    }).then((response) => (response || handleError({
      code: 404,
      entityTitle: 'Продукт',
    }))),
  },

  SearchResult: {
    __resolveType: resolveType('Product'),
  },
}

export default resolvers
