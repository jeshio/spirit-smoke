export interface IProductCategoriesFilters {
  [productCategorySlug: string]: {
    selectedCompanyIds: string[]
    selectedFeatureIds: string[]
  }
}
