import { productCategoriesFiltersVar } from '.'
import { IProductCategoriesFilters } from './types'

export const setSelectedCompanyIds = (
  productCategorySlug: string,
  selectedCompanyIds: IProductCategoriesFilters[0]['selectedCompanyIds']
) => {
  const currentFilters = productCategoriesFiltersVar()
  productCategoriesFiltersVar({
    ...currentFilters,
    [productCategorySlug]: {
      ...currentFilters[productCategorySlug],
      selectedCompanyIds,
    },
  })
}

export const clearProductCategoryFilters = (productCategorySlug: string) => {
  const filters = productCategoriesFiltersVar()

  delete filters[productCategorySlug]

  productCategoriesFiltersVar(filters)
}
