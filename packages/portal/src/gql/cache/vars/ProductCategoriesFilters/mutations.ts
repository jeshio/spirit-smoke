import { productCategoriesFiltersVar } from '.'
import { IProductCategoriesFilters } from './types'

export const setSelectedProductLineIds = (
  productCategorySlug: string,
  selectedProductLineIds: IProductCategoriesFilters[0]['selectedProductLineIds']
) => {
  const currentFilters = productCategoriesFiltersVar()
  productCategoriesFiltersVar({
    ...currentFilters,
    [productCategorySlug]: {
      selectedFeatureIds: [],
      ...currentFilters[productCategorySlug],
      selectedProductLineIds,
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
      selectedProductLineIds: [],
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
