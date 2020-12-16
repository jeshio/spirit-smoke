import React, { useMemo } from 'react'
import { RouteComponentProps } from 'react-router'
import { useProcurementItemPageQuery } from '@/gql/__generated__/types'
import UPageContainer from '@/ui-components/UPageContainer'
import { Card } from 'antd'
import UDescriptions from '@/ui-components/UDescriptions'
import UButton from '@/ui-components/UButton'

import useStableQuery from '@/hooks/gql/useStableQuery'
import { EditFilled } from '@ant-design/icons'
import { Link } from 'umi'
import {
  Item,
  ItemTitle,
  ItemProductPrice,
  ItemProductsCount,
  ItemProductTotalPrice,
  ProductsList,
} from './styles/item.styled'

interface IProcurementItemPageProps
  extends RouteComponentProps<{
    id: string
  }> {}

const ProcurementItemPage: React.FunctionComponent<IProcurementItemPageProps> = (props) => {
  const { id } = props.match.params
  const [query, queryComponent] = useStableQuery(useProcurementItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка поставки',
    queryName: 'procurement',
  })

  const procurement = query?.data?.procurement
  const productsList = useMemo(
    () =>
      procurement?.productProcurements.map(({ product, costs, count }) => (
        <Item key={product.id}>
          <ItemTitle>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </ItemTitle>
          <div>
            <ItemProductsCount>x{count}</ItemProductsCount>
            {' по '}
            <ItemProductPrice>{costs} ₽</ItemProductPrice>
            {', всего '}
            <ItemProductTotalPrice>{costs * count} ₽</ItemProductTotalPrice>
          </div>
        </Item>
      )) || [],
    [procurement]
  )

  if (queryComponent || !procurement) return queryComponent as React.ReactElement

  return (
    <UPageContainer
      title={`Поставка #${procurement.id}`}
      extra={
        <>
          {/* <UPopconfirm onConfirm={deleteProduct as any}>
            <UButton danger icon={<DeleteFilled />}>
              Закрыть заказ
            </UButton>
          </UPopconfirm> */}
          <UButton type="primary" href={`/procurements/${procurement.id}/edit`} icon={<EditFilled />}>
            Редактировать
          </UButton>
        </>
      }
    >
      <Card title={`Информация о заказе (№${procurement.id})`}>
        <UDescriptions>
          <UDescriptions.Item label="Адрес">{procurement.status}</UDescriptions.Item>
          <UDescriptions.Item label="Время доставки">{procurement.nextStatusDate}</UDescriptions.Item>
          <UDescriptions.Item label="Стоимость доставки">{procurement.deliveryCost}</UDescriptions.Item>
        </UDescriptions>
      </Card>
      <Card title="Продукты">
        <ProductsList>{productsList}</ProductsList>
      </Card>
    </UPageContainer>
  )
}

export default ProcurementItemPage
