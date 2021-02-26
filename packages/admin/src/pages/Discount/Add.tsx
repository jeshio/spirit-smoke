import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { useCreateDiscountMutation } from '@/gql/__generated__/types'
import { RouteComponentProps } from 'react-router'
import { notification } from 'antd'
import DiscountForm, { IDiscountFormProps } from './Form'

interface IAddDiscountPageProps extends RouteComponentProps {}

const AddDiscountPage: React.FunctionComponent<IAddDiscountPageProps> = (props) => {
  const [createDiscount, createDiscountRequest] = useCreateDiscountMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Скидка успешно добавлена!',
        })
        props.history.push(`/discounts/${r.createDiscount.id}`)
      }
    },
    onError: () => {},
  })

  const handleSubmit: IDiscountFormProps['onSubmit'] = (fields) => {
    createDiscount({
      variables: {
        input: fields as any,
      },
    })
  }

  return (
    <UPageContainer title="Добавить скидку">
      <DiscountForm loading={createDiscountRequest.loading} onSubmit={handleSubmit} />
    </UPageContainer>
  )
}

export default AddDiscountPage
