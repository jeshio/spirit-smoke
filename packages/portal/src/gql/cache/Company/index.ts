import { TypedTypePolicies } from '@/gql/__generated__/apollo-helpers'
import { productCategoriesFiltersVar } from '../vars/ProductCategoriesFilters'

const fields: TypedTypePolicies['Company']['fields'] = {
  isSelectedForProductCategory: {
    read(_, { readField, variables: { productCategorySlug } }) {
      const id = readField<string>('id')
      const filters = productCategoriesFiltersVar()
      return filters[productCategorySlug]?.selectedCompanyIds.includes(id) || false
    },
  },
}

const Company = { fields }

export default Company
