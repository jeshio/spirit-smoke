import { TypedTypePolicies } from '@/gql/__generated__/apollo-helpers'
import { productCategoriesFiltersVar } from '../vars/ProductCategoriesFilters'

const fields: TypedTypePolicies['Feature']['fields'] = {
  isSelectedForProductCategory: {
    read(_, { readField, variables: { productCategorySlug } }) {
      const id = readField<string>('id')
      const filters = productCategoriesFiltersVar()
      return filters[productCategorySlug]?.selectedFeatureIds.includes(id) || false
    },
  },
}

const Feature = { fields }

export default Feature
