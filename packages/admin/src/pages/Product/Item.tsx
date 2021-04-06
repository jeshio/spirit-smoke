import React, { useState } from 'react'
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
import UWAddProductToProcurementModal from '@/ui-widgets/UWAddProductToProcurementModal'
import { ItemImage, ItemImageWrapper } from './styles/item.styled'
import productFeaturesToFlatFeature from './helpers/productFeaturesToFlatFeatures'
import ProcurementsList from './components/ProcurementsList'
import ProductDescription from './components/ProductDescription'

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
  const [addToProcurementModalVisible, setAddToProcurementModalVisible] = useState(false)
  const switchAddToProcurementModalVisible = () => setAddToProcurementModalVisible(!addToProcurementModalVisible)
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
          <UButton onClick={switchAddToProcurementModalVisible} icon={<EditFilled />}>
            Добавить в поставку
          </UButton>
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
            <a href={product.imageUrl} target="_blank" rel="noreferrer">
              <ItemImage
                style={{
                  backgroundImage: `url(${product.imageUrl})`,
                }}
              />
            </a>
          </ItemImageWrapper>
        </UCol>
        <UCol span={24} md={17} xl={18} xxl={19}>
          <ProductDescription product={product} />

          <Card title="Поставки продукта" style={{ marginTop: '5px' }}>
            <ProcurementsList product={product} />
          </Card>
        </UCol>
      </URow>

      <UWAddProductToProcurementModal
        visible={addToProcurementModalVisible}
        onClose={switchAddToProcurementModalVisible}
        productId={product.id}
      />
    </UPageContainer>
  )
}

export default ProductItemPage
