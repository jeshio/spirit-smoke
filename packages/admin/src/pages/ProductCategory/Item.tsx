import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import UPopconfirm from '@/ui-components/UPopconfirm'
import { DeleteFilled, EditFilled } from '@ant-design/icons'
import UButton from '@/ui-components/UButton'
import UDescriptions from '@/ui-components/UDescriptions'
import { Card, Divider } from 'antd'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'
import { RouteComponentProps } from 'react-router'
import useStableQuery from '@/hooks/gql/useStableQuery'
import { useProductCategoryItemPageQuery, useDeleteProductCategoryMutation } from '@/gql/__generated__/types'
import ProductsTable from '../Company/components/ProductsTable'

interface IProductCategoryItemPageProps
  extends RouteComponentProps<{
    id: string
  }> {}

const ProductCategoryItemPage: React.FunctionComponent<IProductCategoryItemPageProps> = (props) => {
  const { id } = props.match.params
  const [query, queryComponent] = useStableQuery(useProductCategoryItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка категории продуктов',
    queryName: 'productCategory',
  })
  const [deleteProductCategory] = useDeleteProductCategoryMutation({
    variables: {
      id,
    },
    onCompleted: () => {
      props.history.push('/product-categories')
    },
    onError: () => {},
  })

  if (queryComponent || !query?.data.productCategory) return queryComponent as React.ReactElement

  const { productCategory } = query.data

  return (
    <UPageContainer
      title={`${productCategory.name}`}
      extra={
        <>
          <UPopconfirm onConfirm={deleteProductCategory as any}>
            <UButton danger icon={<DeleteFilled />}>
              Удалить
            </UButton>
          </UPopconfirm>
          <UButton type="primary" href={`/product-categories/${productCategory.id}/edit`} icon={<EditFilled />}>
            Редактировать
          </UButton>
        </>
      }
    >
      <Card title={`Информация о категории продуктов (ID ${productCategory.id})`}>
        <UDescriptions>
          <UDescriptions.Item label="Название">{productCategory.name}</UDescriptions.Item>
          <UDescriptions.Item label="slug">{productCategory.slug}</UDescriptions.Item>
        </UDescriptions>
        <Divider />
        <p>{productCategory.description}</p>
      </Card>
      <URow gutter={[4, 8]}>
        <UCol xxl={12}>
          <Card title="Статистика">В разработке</Card>
        </UCol>
        <UCol xxl={12}>
          <Card title="Продукты этой категории">
            <ProductsTable
              products={productCategory.products}
              tableProps={{
                pagination: {
                  defaultPageSize: 5,
                },
              }}
            />
          </Card>
        </UCol>
      </URow>
    </UPageContainer>
  )
}

export default ProductCategoryItemPage
