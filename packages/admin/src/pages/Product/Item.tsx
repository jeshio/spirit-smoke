import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { useProductItemPageQuery, useDeleteProductMutation } from '@/gql/__generated__/types'
import UPageContainer from '@/ui-components/UPageContainer'
import { Card, Divider, Badge } from 'antd'
import UDescriptions from '@/ui-components/UDescriptions'
import UButton from '@/ui-components/UButton'
import UPopconfirm from '@/ui-components/UPopconfirm'
import { DeleteFilled, EditFilled, ImportOutlined } from '@ant-design/icons'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'

import useStableQuery from '@/hooks/gql/useStableQuery'
import UFeaturesList from '@/ui-components/UFeaturesList'
import { ItemImage, ItemImageWrapper } from './styles/item.styled'

interface IProductItemPageProps
  extends RouteComponentProps<{
    id: string
  }> {}

const ProductItemPage: React.FunctionComponent<IProductItemPageProps> = (props) => {
  const { id } = props.match.params
  const [query, queryComponent] = useStableQuery(useProductItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка продукта',
    queryName: 'product',
  })
  const [deleteProduct] = useDeleteProductMutation({
    variables: {
      id,
    },
    onCompleted: () => {
      props.history.push('/products')
    },
    onError: () => {},
  })

  if (queryComponent || !query?.data.product) return queryComponent as React.ReactElement

  const { product } = query.data

  return (
    <UPageContainer
      title={product.company ? `${product.company.name}, ${product.name}` : product.name}
      extra={
        <>
          <UPopconfirm onConfirm={deleteProduct as any}>
            <UButton danger icon={<DeleteFilled />}>
              Удалить
            </UButton>
          </UPopconfirm>
          <UButton type="primary" href={`/products/${product.id}/edit`} icon={<EditFilled />}>
            Редактировать
          </UButton>
        </>
      }
    >
      <URow>
        <UCol span={24} md={7} xl={6} xxl={5}>
          <ItemImageWrapper>
            <ItemImage
              style={{
                backgroundImage: `url(${product.imageUrl})`,
              }}
            />
          </ItemImageWrapper>
        </UCol>
        <UCol span={24} md={17} xl={18} xxl={19}>
          <Card
            title={`Информация о продукте (ID ${product.id})`}
            extra={
              !product.company || !product.productCategory ? (
                <Badge status="warning" text="НЕВИДИМ для клиентов" />
              ) : null
            }
          >
            <UDescriptions>
              <UDescriptions.Item label="Осталось штук">{product.count}</UDescriptions.Item>
              <UDescriptions.Item label="Текущая цена">{product.price} ₽</UDescriptions.Item>
              <UDescriptions.Item label="Название">{product.name}</UDescriptions.Item>
              <UDescriptions.Item label="Производитель">
                {product.company && (
                  <UButton href={`/companies/${product.company.id}`} type="link" icon={<ImportOutlined />} />
                )}
                {product.company ? product.company.name : <Badge status="warning" text="БЕЗ ПРОИЗВОДИТЕЛЯ" />}
              </UDescriptions.Item>
              <UDescriptions.Item label="Категория">
                {product.productCategory && (
                  <UButton
                    href={`/product-categories/${product.productCategory.id}`}
                    type="link"
                    icon={<ImportOutlined />}
                  />
                )}
                {product.productCategory ? (
                  product.productCategory.name
                ) : (
                  <Badge status="warning" text="БЕЗ КАТЕГОРИИ" />
                )}
              </UDescriptions.Item>
              <UDescriptions.Item label="Slug">{product.slug}</UDescriptions.Item>
              <UDescriptions.Item label="Добавлен">{product.createdAt}</UDescriptions.Item>
              <UDescriptions.Item label="Обновлён">{product.updatedAt}</UDescriptions.Item>
              <UDescriptions.Item label="Особенности">
                <UFeaturesList features={product.features} />
              </UDescriptions.Item>
            </UDescriptions>
            <Divider />
            <p>{product.description}</p>
          </Card>
        </UCol>
      </URow>
    </UPageContainer>
  )
}

export default ProductItemPage
