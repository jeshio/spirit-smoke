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
      selectedFeatureIds: [],
      ...currentFilters[productCategorySlug],
      selectedCompanyIds,
    },
  })
}

export const setSelectedFeatureIds = (
  productCategorySlug: string,
  selectedFeatureIds: IProductCategoriesFilters[0]['selectedFeatureIds']
) => {
  const currentFilters = productCategoriesFiltersVar()
  productCategoriesFiltersVar({
    ...currentFilters,
    [productCategorySlug]: {
      selectedCompanyIds: [],
      ...currentFilters[productCategorySlug],
      selectedFeatureIds,
    },
  })
}

export const clearProductCategoryFilters = (productCategorySlug: string) => {
  const filters = productCategoriesFiltersVar()

  delete filters[productCategorySlug]

  productCategoriesFiltersVar(filters)
}
