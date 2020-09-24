import { ProductsListPageFragment } from '@/gql/__generated__/types'

/**
 * Преобразует массив productFeatures в массив с плоскими features
 */
const productFeaturesToFlatFeature = (features: ProductsListPageFragment['productFeatures']) => {
  return features.map(({ endTime, feature }) => ({
    ...feature,
    endTime,
  }))
}

export default productFeaturesToFlatFeature
