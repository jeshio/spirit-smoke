import * as React from 'react'
import { useProductCategoryMenuListQuery } from '@/gql/__generated__/types'
import UList from '@/ui-components/UList'
import { Item } from './index.styled'

interface ICProductCategoriesListProps {
  className?: string
}

const CProductCategoriesList: React.FunctionComponent<ICProductCategoriesListProps> = ({ className }) => {
  const { error, loading, data } = useProductCategoryMenuListQuery()

  if (loading || !data) return <span>Загрузка...</span>

  return (
    <UList
      className={className}
      items={data.productCategories.map((productCategory) => (
        <Item
          key={productCategory.id}
          tagComponentProps={{
            href: `/${productCategory.slug}`,
          }}
        >
          {productCategory.name}
        </Item>
      ))}
      isHorizontal
    />
  )
}

export default CProductCategoriesList
