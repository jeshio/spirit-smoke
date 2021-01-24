import { productCategoriesFiltersVar } from '@/gql/cache/vars/ProductCategoriesFilters'
import { setSelectedFeatureIds } from '@/gql/cache/vars/ProductCategoriesFilters/mutations'
import { useFeaturesSelectorQuery } from '@/gql/__generated__/types'
import isServer from '@/helpers/isServer'
import { useReactiveVar } from '@apollo/client'
import React, { useEffect, useMemo } from 'react'
import { Root, Item, ItemTitle, ItemImage, RootWrapper, ItemsPair } from './index.styled'

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
  const windowWidth = isServer() ? 0 : window.innerWidth
  // TODO: адаптация под размер экрана
  const isOneRowFeatures = windowWidth >= 0
  const items = useMemo(() => {
    const featureItems = featuresRequest.data?.features.filter((feature) => !feature.isDisabled) || []
    const result = []

    for (let i = 0; i < featureItems.length; i += 2) {
      const elements = [featureItems[i]]

      if (featureItems[i + 1]) {
        elements.push(featureItems[i + 1])
      }

      const elementsJSX = elements.map((feature) => (
        <Item
          key={feature.id}
          onClick={handleItemClick(feature.id, feature.isSelectedForProductCategory)}
          isActive={noSelectedFeatures || feature.isSelectedForProductCategory}
        >
          <ItemImage src={feature.imageUrl} />
          <ItemTitle>{feature.name}</ItemTitle>
        </Item>
      ))

      if (isOneRowFeatures) {
        result.push(...elementsJSX)
      } else {
        result.push(<ItemsPair key={elements[0].id}>{elementsJSX}</ItemsPair>)
      }
    }

    return result
  }, [featuresRequest.data, noSelectedFeatures, isOneRowFeatures])

  useEffect(() => {
    setVisible(items.length > 1)
  }, [items])

  if (items.length < 2) return null

  return (
    <RootWrapper>
      <Root items={items} slidesToScroll={[2, 4, 6]} />
    </RootWrapper>
  )
}

export default CFeaturesSelector
