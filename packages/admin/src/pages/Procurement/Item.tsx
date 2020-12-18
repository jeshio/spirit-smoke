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
import UPrice from '@/ui-components/UPrice'
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
            <ItemProductTotalPrice>
              <UPrice>{costs * count}</UPrice>
            </ItemProductTotalPrice>
          </div>
        </Item>
      )) || [],
    [procurement]
  )

  if (queryComponent || !procurement) return queryComponent as React.ReactElement

  return (
    <UPageContainer
      title={`Поставка ${procurement.name}`}
      extra={
        <>
          <UButton type="primary" href={`/procurements/${procurement.id}/edit`} icon={<EditFilled />}>
            Редактировать
          </UButton>
        </>
      }
    >
      <Card title={`Информация о поставке (#${procurement.id})`}>
        <UDescriptions>
          <UDescriptions.Item label="Название">{procurement.name}</UDescriptions.Item>
          <UDescriptions.Item label="Поставщик">{procurement.providerInfo}</UDescriptions.Item>
          <UDescriptions.Item label="Комментарий к поставке">{procurement.comment}</UDescriptions.Item>
          <UDescriptions.Item label="Статус">{procurement.status}</UDescriptions.Item>
          <UDescriptions.Item label="Время следующего статуса">{procurement.nextStatusDate}</UDescriptions.Item>
          <UDescriptions.Item label="Стоимость доставки">
            <UPrice>{procurement.deliveryCost}</UPrice>
          </UDescriptions.Item>
          <UDescriptions.Item label="Стоимость продуктов">
            <UPrice>{procurement.productsPrice}</UPrice>
          </UDescriptions.Item>
          <UDescriptions.Item label="Итог">
            <UPrice>{procurement.totalPrice}</UPrice>
          </UDescriptions.Item>
        </UDescriptions>
      </Card>
      <Card title="Продукты">
        <ProductsList>{productsList}</ProductsList>
      </Card>
    </UPageContainer>
  )
}

export default ProcurementItemPage
