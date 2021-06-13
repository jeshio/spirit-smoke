import React, { useMemo } from 'react'
import { RouteComponentProps } from 'react-router'
import { useOrderItemPageQuery } from '@/gql/__generated__/types'
import UPageContainer from '@/ui-components/UPageContainer'
import { Card } from 'antd'
import UDescriptions from '@/ui-components/UDescriptions'
import UButton from '@/ui-components/UButton'

import useStableQuery from '@/hooks/gql/useStableQuery'
import { EditFilled } from '@ant-design/icons'
import { Link } from 'umi'
import UPrice from '@/ui-components/UPrice'
import {
  Item,
  ItemTitle,
  ItemProductPrice,
  ItemProductsCount,
  ItemProductTotalPrice,
  ProductsList,
} from './styles/item.styled'

interface IOrderItemPageProps
  extends RouteComponentProps<{
    id: string
  }> {}

const OrderItemPage: React.FunctionComponent<IOrderItemPageProps> = (props) => {
  const { id } = props.match.params
  const [query, queryComponent] = useStableQuery(useOrderItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка заказа',
    queryName: 'order',
  })

  const order = query?.data?.order
  const productsList = useMemo(
    () =>
      order?.orderProducts.map(
        ({ product, productsCount }) =>
          (
            <Item key={product.id}>
              <ItemTitle>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </ItemTitle>
              <div>
                <ItemProductsCount>x{productsCount}</ItemProductsCount>
                {' по '}
                <ItemProductPrice>{product.price} ₽</ItemProductPrice>
                {', всего '}
                <ItemProductTotalPrice>{(product.price || 0) * productsCount} ₽</ItemProductTotalPrice>
              </div>
            </Item>
          ) || []
      ),
    [order]
  )

  if (queryComponent || !order) return queryComponent as React.ReactElement

  return (
    <UPageContainer
      title={`Заказ #${order.id}`}
      extra={
        <>
          {/* <UPopconfirm onConfirm={deleteProduct as any}>
            <UButton danger icon={<DeleteFilled />}>
              Закрыть заказ
            </UButton>
          </UPopconfirm> */}
          <UButton type="primary" href={`/orders/${order.id}/edit`} icon={<EditFilled />}>
            Редактировать
          </UButton>
        </>
      }
    >
      <Card title={`Информация о заказе (№${order.id})`}>
        <UDescriptions>
          {/* <UDescriptions.Item label="Адрес">{order.address}</UDescriptions.Item> */}
          {/* <UDescriptions.Item label="Время доставки">{order.deliveryTime}</UDescriptions.Item> */}
          {/* <UDescriptions.Item label="Телефон">{order.phoneNumber}</UDescriptions.Item> */}
          <UDescriptions.Item label="Комментарий клиента">{order.comment}</UDescriptions.Item>
          <UDescriptions.Item label="Наш комментарий">{order.ourComment}</UDescriptions.Item>
          {/* <UDescriptions.Item label="Код домофона">{order.intercomCode}</UDescriptions.Item> */}
          <UDescriptions.Item label="Статус">{order.status}</UDescriptions.Item>
          <UDescriptions.Item label="Цена без скидки">
            <UPrice>{order.orderTotal.totalPrice}</UPrice>
          </UDescriptions.Item>
          <UDescriptions.Item label="Скидка">
            <UPrice>{order.orderTotal.totalDiscount}</UPrice>
          </UDescriptions.Item>
          <UDescriptions.Item label="Итоговая цена">
            <strong>
              <UPrice>{order.orderTotal.totalPriceWithDiscount}</UPrice>
            </strong>
          </UDescriptions.Item>
          <UDescriptions.Item label="Прибыль">
            {order.profit >= 0 ? `+` : '-'}
            <UPrice>{order.profit}</UPrice> ({order.margin}%)
          </UDescriptions.Item>
        </UDescriptions>
      </Card>
      <Card title="Продукты">
        <ProductsList>{productsList}</ProductsList>
      </Card>
    </UPageContainer>
  )
}

export default OrderItemPage
