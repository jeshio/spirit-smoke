import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { useProductItemPageQuery, useDeleteProductMutation } from '@/gql/__generated__/types'
import Exception from '@/components/Exception'
import UPageContainer from '@/ui-components/UPageContainer'
import { Card, Divider } from 'antd'
import UDescriptions from '@/ui-components/UDescriptions'
import UButton from '@/ui-components/UButton'
import UPopconfirm from '@/ui-components/UPopconfirm'
import ULoading from '@/ui-components/ULoading'
import { DeleteFilled, EditFilled } from '@ant-design/icons'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'

import styles from './styles.less'

interface IProductItemPageProps
  extends RouteComponentProps<{
    id: string
  }> {}

const ProductItemPage: React.FunctionComponent<IProductItemPageProps> = (props) => {
  const { id } = props.match.params
  const { loading, error, data } = useProductItemPageQuery({
    variables: {
      id,
    },
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
  const { product } = data || {}

  if (error) return <Exception apolloError={error} />

  if (loading) return <ULoading tip="Загрузка продукта" />

  if (!product) return <Exception type="404" />

  return (
    <UPageContainer
      title={`${product.company.name}, ${product.name}`}
      pageTitle={`${product.name} продукт`}
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
          <div className={styles.ItemImageWrapper}>
            <div
              className={styles.ItemImage}
              style={{
                backgroundImage: `url(${product.imageUrl})`,
              }}
            />
          </div>
        </UCol>
        <UCol span={24} md={17} xl={18} xxl={19}>
          <Card>
            <UDescriptions title={`Информация о продукте (ID ${product.id})`}>
              <UDescriptions.Item label="Осталось штук">{product.count}</UDescriptions.Item>
              <UDescriptions.Item label="Текущая цена">{product.price} ₽</UDescriptions.Item>
              <UDescriptions.Item label="Название">{product.name}</UDescriptions.Item>
              <UDescriptions.Item label="Компания">{product.company.name}</UDescriptions.Item>
              <UDescriptions.Item label="Категория">{product.productCategory.name}</UDescriptions.Item>
              <UDescriptions.Item label="Slug">{product.slug}</UDescriptions.Item>
              <UDescriptions.Item label="Добавлен">{product.createdAt}</UDescriptions.Item>
              <UDescriptions.Item label="Обновлён">{product.updatedAt}</UDescriptions.Item>
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
