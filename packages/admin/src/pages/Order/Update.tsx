import { useOrderItemPageQuery, useUpdateOrderMutation } from '@/gql/__generated__/types'
import useStableQuery from '@/hooks/gql/useStableQuery'
import UPageContainer from '@/ui-components/UPageContainer'
import { notification } from 'antd'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import OrderForm, { IOrderFormProps } from './Form'

interface IUpdateOrderPageProps
  extends RouteComponentProps<{
    id: string
  }> {}

const UpdateOrderPage: React.FunctionComponent<IUpdateOrderPageProps> = (props) => {
  const id = props.match.params.id || ''
  const [orderQuery, orderQueryComponent] = useStableQuery(useOrderItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка заказа',
    queryName: 'order',
  })
  const [updateOrder, updateOrderRequest] = useUpdateOrderMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Заказ успешно обновлён!',
        })
        props.history.push(`/orders/${id}`)
      }
    },
    onError: () => {},
  })

  const handleSubmit: IOrderFormProps['onSubmit'] = (fields) => {
    updateOrder({
      variables: {
        id,
        input: fields as any,
      },
    })
  }

  if (orderQueryComponent || !orderQuery?.data.order) return orderQueryComponent as React.ReactElement

  const { order } = orderQuery.data

  return (
    <UPageContainer title={`Редактирование заказа ${order.address}`}>
      <OrderForm onSubmit={handleSubmit} loading={updateOrderRequest.loading} order={order} isUpdate />
    </UPageContainer>
  )
}

export default UpdateOrderPage
