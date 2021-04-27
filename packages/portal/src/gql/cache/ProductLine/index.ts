import { TypedTypePolicies } from '@/gql/__generated__/apollo-helpers'
import { productCategoriesFiltersVar } from '../vars/ProductCategoriesFilters'

const fields: TypedTypePolicies['ProductLine']['fields'] = {
  isSelectedForProductCategory: {
    read(_, { readField, variables: { productCategorySlug } }) {
      const id = readField<string>('id')
      const filters = productCategoriesFiltersVar()
      return filters[productCategorySlug]?.selectedProductLineIds.includes(id) || false
    },
  },
}

const ProductLine = { fields }

export default ProductLine
