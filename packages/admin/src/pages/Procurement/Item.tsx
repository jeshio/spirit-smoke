import React from 'react'
import { RouteComponentProps } from 'react-router'
import { useProcurementItemPageQuery } from '@/gql/__generated__/types'
import UPageContainer from '@/ui-components/UPageContainer'
import { Card } from 'antd'
import UDescriptions from '@/ui-components/UDescriptions'
import UButton from '@/ui-components/UButton'

import useStableQuery from '@/hooks/gql/useStableQuery'
import { EditFilled } from '@ant-design/icons'
import UPrice from '@/ui-components/UPrice'
import UWeight from '@/ui-components/UWeight'
import ProductsList from './components/ProductsList'
import { PROCUREMENT_STATUSES } from './constants'

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

  if (queryComponent || !procurement) return queryComponent as React.ReactElement

  return (
    <UPageContainer
      title={`Поставка ${procurement.name}`}
      extra={
        <>
          {PROCUREMENT_STATUSES[procurement.status] !== PROCUREMENT_STATUSES.SUCCESS && (
            <UButton href={`/procurements/${procurement.id}/check`}>Принять товар</UButton>
          )}
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
          <UDescriptions.Item label="Статус">{PROCUREMENT_STATUSES[procurement.status]}</UDescriptions.Item>
          <UDescriptions.Item label="Время следующего статуса">{procurement.nextStatusDate}</UDescriptions.Item>
          <UDescriptions.Item label="Стоимость доставки">
            <UPrice>{procurement.deliveryCost || 0}</UPrice>
          </UDescriptions.Item>
          <UDescriptions.Item label="Стоимость продуктов">
            <UPrice>{procurement.productsPrice}</UPrice>
          </UDescriptions.Item>
          <UDescriptions.Item label="Итог">
            <UPrice>{procurement.totalPrice}</UPrice>
          </UDescriptions.Item>
          <UDescriptions.Item label="Сумма продажи">
            <UPrice>{procurement.saleAmount}</UPrice>
          </UDescriptions.Item>
          <UDescriptions.Item label="Вес">
            <UWeight>{procurement.weight}</UWeight>
          </UDescriptions.Item>
          <UDescriptions.Item label="Маржа">
            {procurement.margin > 0 && '+'}
            {procurement.margin}%
          </UDescriptions.Item>
        </UDescriptions>
      </Card>
      <Card title="Продукты">
        <ProductsList procurement={procurement} />
      </Card>
    </UPageContainer>
  )
}

export default ProcurementItemPage
