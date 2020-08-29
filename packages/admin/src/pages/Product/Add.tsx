import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { notification } from 'antd'
import { useCreateProductMutation } from '@/gql/__generated__/types'
import { RouteComponentProps } from 'react-router'
import Form, { IFormProps } from './Form'

interface IAddProductPageProps extends RouteComponentProps {}

const AddProductPage: React.FunctionComponent<IAddProductPageProps> = ({ history }) => {
  const [createProduct, createProductRequest] = useCreateProductMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Продукт успешно добавлен!',
        })
        history.push(`/products/${r.createProduct.id}`)
      }
    },
    onError: () => {},
  })

  const handleSubmit: IFormProps['onSubmit'] = (fields) => {
    createProduct({
      variables: {
        input: fields as any,
      },
    })
  }

  return (
    <UPageContainer title="Добавление продукта">
      <Form onSubmit={handleSubmit} loading={createProductRequest.loading} />
    </UPageContainer>
  )
}

export default AddProductPage
