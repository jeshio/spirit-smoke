import { productCategoriesFiltersVar } from '@/gql/cache/vars/ProductCategoriesFilters'
import { setSelectedProductLineIds } from '@/gql/cache/vars/ProductCategoriesFilters/mutations'
import { useProductLinesSelectorQuery } from '@/gql/__generated__/types'
import { useReactiveVar } from '@apollo/client'
import { orderBy } from 'lodash'
import React, { useMemo } from 'react'
import { ProductLineItem, Root, RootWrapper } from './index.styled'

interface ICProductLineSelectorProps {
  productCategorySlug: string
}

const CProductLineSelector: React.FunctionComponent<ICProductLineSelectorProps> = ({ productCategorySlug }) => {
  const { loading, data } = useProductLinesSelectorQuery({
    variables: {
      productCategorySlug,
    },
  })
  const filters = useReactiveVar(productCategoriesFiltersVar)
  const noSelectedProductLine =
    filters[productCategorySlug] === undefined || filters[productCategorySlug]?.selectedProductLineIds.length === 0

  const handleItemClick = (productLineId: string, currentIsActive: boolean) => () => {
    let newValue = []
    const currentSelectedProductLine = filters[productCategorySlug]?.selectedProductLineIds || []

    if (currentIsActive) {
      newValue = currentSelectedProductLine.filter((id) => id !== productLineId)
    } else {
      newValue = [...currentSelectedProductLine, productLineId]
    }

    setSelectedProductLineIds(productCategorySlug, newValue)
  }

  const items = useMemo(
    () =>
      orderBy(data?.productLines || [], ['isSelectedForProductCategory', 'name'], ['desc', 'asc']).map(
        (productLine) => (
          <ProductLineItem
            key={productLine.id}
            color={productLine.color}
            isActive={noSelectedProductLine || productLine.isSelectedForProductCategory}
            onClick={handleItemClick(productLine.id, productLine.isSelectedForProductCategory)}
          >
            {productLine.name}
          </ProductLineItem>
        )
      ),
    [data, noSelectedProductLine, handleItemClick]
  )

  if (loading || !data) return <span>Загрузка...</span>

  return (
    <RootWrapper>
      <Root items={items} slidesToScroll={[1, 2, 3]} />
    </RootWrapper>
  )
}

export default CProductLineSelector
