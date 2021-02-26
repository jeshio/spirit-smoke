import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import useStableQuery from '@/hooks/gql/useStableQuery'
import { useDiscountItemPageQuery } from '@/gql/__generated__/types'
import UPageContainer from '@/ui-components/UPageContainer'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'
import { Card } from 'antd'
import UDescriptions from '@/ui-components/UDescriptions'
import UBlock from '@/ui-components/UBlock'
import UPrice from '@/ui-components/UPrice'

interface IDiscountItemPageProps
  extends RouteComponentProps<{
    id: string
  }> {}

const DiscountItemPage: React.FunctionComponent<IDiscountItemPageProps> = (props) => {
  const { id } = props.match.params
  const [query, queryComponent] = useStableQuery(useDiscountItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка скидки',
    queryName: 'discount',
  })

  if (queryComponent || !query?.data.discount) return queryComponent as React.ReactElement

  const { discount } = query.data

  return (
    <UPageContainer title={discount.name}>
      <Card title={`Информация о скидке (ID ${discount.id})`}>
        <URow>
          <UCol span={24} md={2} xxl={1}>
            <UBlock pb={[5, 5, 5, 0]} pt={[0, 0, 0, 2]} />
          </UCol>
          <UCol span={24} md={22} xxl={23}>
            <UDescriptions>
              <UDescriptions.Item label="Название">{discount.name}</UDescriptions.Item>
              <UDescriptions.Item label="Код">{discount.code}</UDescriptions.Item>
              <UDescriptions.Item label="Скидка в ₽">
                <UPrice>{discount.rub}</UPrice>
              </UDescriptions.Item>
              <UDescriptions.Item label="Скидка в %">
                {discount.percent ? `${discount.percent}%` : discount.percent}
              </UDescriptions.Item>
              <UDescriptions.Item label="Одноразовый промокод">
                {discount.isDisposable ? <CheckOutlined /> : <CloseOutlined />}
              </UDescriptions.Item>
              <UDescriptions.Item label="Скидка на все товары">
                {discount.isGlobal ? <CheckOutlined /> : <CloseOutlined />}
              </UDescriptions.Item>
              <UDescriptions.Item label="Дата начала действия">{discount.startDate}</UDescriptions.Item>
              <UDescriptions.Item label="Дата окончания действия">{discount.endDate}</UDescriptions.Item>
            </UDescriptions>
          </UCol>
        </URow>
      </Card>
    </UPageContainer>
  )
}

export default DiscountItemPage
