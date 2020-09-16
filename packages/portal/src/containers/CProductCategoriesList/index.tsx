import * as React from 'react'
import { useProductCategoryMenuListQuery } from '@/gql/__generated__/types'
import UList from '@/ui-components/UList'
import { Item, Root, ItemImage, ItemText, Content } from './index.styled'

interface ICProductCategoriesListProps {
  className?: string
}

const CProductCategoriesList: React.FunctionComponent<ICProductCategoriesListProps> = ({ className }) => {
  const { error, loading, data } = useProductCategoryMenuListQuery()

  if (loading || !data) return <span>Загрузка...</span>

  const items = React.useMemo(
    () =>
      data.productCategories.map((productCategory) => (
        <Item key={productCategory.id} href={`/${productCategory.slug}`}>
          <ItemImage maskUrl="https://www.svgrepo.com/show/264260/hookah.svg" />
          <ItemText>{productCategory.name}</ItemText>
        </Item>
      )),
    [data.productCategories]
  )

  return (
    <Root>
      <Content>
        <UList className={className} items={items} isHorizontal />
      </Content>
    </Root>
  )
}

export default CProductCategoriesList
