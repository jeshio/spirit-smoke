import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { notification } from 'antd'
import { useCreateOrderMutation } from '@/gql/__generated__/types'
import { RouteComponentProps } from 'react-router'
import OrderForm, { IOrderFormProps } from './Form'

interface IAddOrderPageProps extends RouteComponentProps {}

const AddOrderPage: React.FunctionComponent<IAddOrderPageProps> = ({ history }) => {
  const [createOrder, createOrderRequest] = useCreateOrderMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Заказ успешно добавлен!',
        })
        history.push(`/orders/${r.createOrder.id}`)
      }
    },
    onError: () => {},
  })

  const handleSubmit: IOrderFormProps['onSubmit'] = (fields) => {
    createOrder({
      variables: {
        input: fields as any,
      },
    })
  }

  return (
    <UPageContainer title="Добавление заказа">
      <OrderForm onSubmit={handleSubmit} loading={createOrderRequest.loading} />
    </UPageContainer>
  )
}

export default AddOrderPage
