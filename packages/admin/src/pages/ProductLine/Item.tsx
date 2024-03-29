import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { useProductLineItemPageQuery, useDeleteProductLineMutation } from '@/gql/__generated__/types'
import { RouteComponentProps } from 'react-router'
import useStableQuery from '@/hooks/gql/useStableQuery'
import { Badge, Card } from 'antd'
import UDescriptions from '@/ui-components/UDescriptions'
import { EditFilled, DeleteFilled, ImportOutlined } from '@ant-design/icons'
import UButton from '@/ui-components/UButton'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'
import UPopconfirm from '@/ui-components/UPopconfirm'
import UPrice from '@/ui-components/UPrice'
import UWeight from '@/ui-components/UWeight'
import ProductsTable from './components/ProductsTable'
import ExecutionTypesForm from './components/ExecutionTypesForm'

interface ProductLineItemPageProps
  extends RouteComponentProps<{
    id: string
  }> {}

const ProductLineItemPage: React.FunctionComponent<ProductLineItemPageProps> = (props) => {
  const { id } = props.match.params
  const [query, queryComponent] = useStableQuery(useProductLineItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка линейки продукта',
    queryName: 'productLine',
  })
  const [deleteProductLine] = useDeleteProductLineMutation({
    variables: {
      id,
    },
    onCompleted: () => {
      props.history.push('/product-lines')
    },
    onError: () => {},
  })

  if (queryComponent || !query?.data.productLine) return queryComponent as React.ReactElement

  const { productLine } = query.data

  return (
    <UPageContainer
      title={`${productLine.name}`}
      extra={
        <>
          <UPopconfirm
            onConfirm={deleteProductLine as any}
            title="Все продукты линейки станут недоступны для клиентов. Вы уверены?"
            placement="topRight"
          >
            <UButton danger icon={<DeleteFilled />}>
              Удалить
            </UButton>
          </UPopconfirm>
          <UButton type="primary" href={`/product-lines/${productLine.id}/edit`} icon={<EditFilled />}>
            Редактировать
          </UButton>
        </>
      }
    >
      <Card title={`Информация о линейке продуктов (ID ${productLine.id})`}>
        <UDescriptions>
          <UDescriptions.Item label="Название">{productLine.name}</UDescriptions.Item>
          <UDescriptions.Item label="Категория">
            {productLine.productCategory && (
              <UButton
                href={`/product-categories/${productLine.productCategory.id}`}
                type="link"
                icon={<ImportOutlined />}
              />
            )}
            {productLine.productCategory ? (
              productLine.productCategory.name
            ) : (
              <Badge status="error" text="БЕЗ КАТЕГОРИИ" />
            )}
          </UDescriptions.Item>
          <UDescriptions.Item label="Компания">
            {productLine.company && (
              <UButton href={`/companies/${productLine.company.id}`} type="link" icon={<ImportOutlined />} />
            )}
            {productLine.company ? productLine.company.name : <Badge status="error" text="БЕЗ КОМПАНИИ" />}
          </UDescriptions.Item>
          <UDescriptions.Item label="Текущая цена">
            <UPrice>{productLine.price}</UPrice>
          </UDescriptions.Item>
          <UDescriptions.Item label="Вес">
            <UWeight>{productLine.weight}</UWeight>
          </UDescriptions.Item>
          <UDescriptions.Item label="slug">{productLine.slug}</UDescriptions.Item>
        </UDescriptions>
      </Card>
      <URow gutter={[4, 8]}>
        <UCol xxl={12}>
          <ExecutionTypesForm productLine={productLine} readOnly />
          <Card title="Статистика">В разработке</Card>
        </UCol>
        <UCol xxl={12}>
          <Card title="Продукты линейки">
            <ProductsTable
              products={productLine.products}
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

export default ProductLineItemPage
