import * as React from 'react'
import { useProductCategoryMenuListQuery } from '@/gql/__generated__/types'
import UList from '@/ui-components/UList'
import { Item, Root, ItemImage, ItemText, Content } from './index.styled'
import { useRouter } from 'next/dist/client/router'

interface ICProductCategoriesListProps {
  className?: string
}

const CProductCategoriesList: React.FunctionComponent<ICProductCategoriesListProps> = ({ className }) => {
  const router = useRouter()
  const { loading, data } = useProductCategoryMenuListQuery()

  if (loading || !data) return <span>Загрузка...</span>

  const items = React.useMemo(
    () =>
      data.productCategories.map((productCategory, index) => {
        const isActive = router.asPath.includes(productCategory.slug) || (router.asPath === '/' && index === 0)
        return (
          <Item key={productCategory.id} href={`/${productCategory.slug}`} isActive={isActive}>
            <ItemImage maskUrl="https://www.svgrepo.com/show/264260/hookah.svg" isActive={isActive} />
            <ItemText>{productCategory.name}</ItemText>
          </Item>
        )
      }),
    [data.productCategories, router.asPath]
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
