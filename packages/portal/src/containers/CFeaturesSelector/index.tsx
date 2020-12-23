import { productCategoriesFiltersVar } from '@/gql/cache/vars/ProductCategoriesFilters'
import { setSelectedFeatureIds } from '@/gql/cache/vars/ProductCategoriesFilters/mutations'
import { useFeaturesSelectorQuery } from '@/gql/__generated__/types'
import { useReactiveVar } from '@apollo/client'
import React, { useEffect, useMemo } from 'react'
import { Root, Item, ItemTitle, ItemImage, RootWrapper } from './index.styled'

interface ICFeaturesSelectorProps {
  /** Для управления видимостью внутри компонента */
  setVisible: (isVisible: boolean) => void
  productCategorySlug: string
}

const CFeaturesSelector: React.FunctionComponent<ICFeaturesSelectorProps> = ({ setVisible, productCategorySlug }) => {
  const featuresRequest = useFeaturesSelectorQuery({
    variables: {
      productCategorySlug,
    },
  })
  const filters = useReactiveVar(productCategoriesFiltersVar)
  const noSelectedFeatures =
    filters[productCategorySlug] === undefined || filters[productCategorySlug]?.selectedFeatureIds.length === 0
  const handleItemClick = (featureId: string, currentIsActive: boolean) => () => {
    let newValue = []
    const currentSelectedFeatures = filters[productCategorySlug]?.selectedFeatureIds || []

    if (currentIsActive) {
      newValue = currentSelectedFeatures.filter((id) => id !== featureId)
    } else {
      newValue = [...currentSelectedFeatures, featureId]
    }

    setSelectedFeatureIds(productCategorySlug, newValue)
  }
  const items = useMemo(
    () =>
      featuresRequest.data?.features
        .filter((feature) => !feature.isDisabled)
        .map((feature) => (
          <Item
            key={feature.id}
            onClick={handleItemClick(feature.id, feature.isSelectedForProductCategory)}
            isActive={noSelectedFeatures || feature.isSelectedForProductCategory}
          >
            <ItemImage src={feature.imageUrl} />
            <ItemTitle>{feature.name}</ItemTitle>
          </Item>
        )) || [],
    [featuresRequest.data, noSelectedFeatures]
  )

  useEffect(() => {
    setVisible(items.length > 1)
  }, [items])

  if (items.length < 2) return null

  return (
    <RootWrapper>
      <Root itemsCount={items.length}>{items}</Root>
    </RootWrapper>
  )
}

export default CFeaturesSelector
