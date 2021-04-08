export interface IProductCategoriesFilters {
  [productCategorySlug: string]: {
    selectedProductLineIds: string[]
    selectedFeatureIds: string[]
  }
}
