import * as React from 'react'
import { useProductCategoryMenuListQuery } from '@/gql/__generated__/types'
import UList from '@/ui-components/UList'
import { Item, ItemImage, ItemText, Content } from './index.styled'
import { useRouter } from 'next/dist/client/router'
import UBottomBar from '@/ui-components/UBottomBar'

const { NEXT_PUBLIC_TOBACCO_PRODUCT_CATEGORY_SLUG } = process.env

interface ICProductCategoriesListProps {
  className?: string
}

const ROUTES_WITH_HIDDEN_COMPONENT = ['/cart', '/checkout']

const CProductCategoriesList: React.FunctionComponent<ICProductCategoriesListProps> = ({ className }) => {
  const router = useRouter()
  const isVisible = !ROUTES_WITH_HIDDEN_COMPONENT.includes(router.pathname)
  const { loading, data } = useProductCategoryMenuListQuery()

  const items = React.useMemo(
    () =>
      data?.productCategories.map((productCategory) => {
        const isActive =
          router.asPath.includes(productCategory.slug) ||
          (router.asPath === '/' && productCategory.slug === NEXT_PUBLIC_TOBACCO_PRODUCT_CATEGORY_SLUG)
        return (
          <Item key={productCategory.id} href={`/${productCategory.slug}`} isActive={isActive}>
            <ItemImage maskUrl="https://www.svgrepo.com/show/264260/hookah.svg" isActive={isActive} />
            <ItemText>{productCategory.name}</ItemText>
          </Item>
        )
      }) || [],
    [data?.productCategories, router.asPath]
  )

  if (loading || !data) return <span>Загрузка...</span>

  return (
    <UBottomBar isVisible={isVisible}>
      <Content>
        <UList className={className} items={items} isHorizontal />
      </Content>
    </UBottomBar>
  )
}

export default CProductCategoriesList
