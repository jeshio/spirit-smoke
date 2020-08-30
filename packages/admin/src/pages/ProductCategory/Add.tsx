import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { notification } from 'antd'
import { useCreateProductCategoryMutation } from '@/gql/__generated__/types'
import { RouteComponentProps } from 'react-router'
import Form, { IProductCategoryFormProps } from './Form'

interface IAddProductCategoryPageProps extends RouteComponentProps {}

const AddProductCategoryPage: React.FunctionComponent<IAddProductCategoryPageProps> = ({ history }) => {
  const [createProductCategory, createProductCategoryRequest] = useCreateProductCategoryMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Категория продуктов успешно добавлена!',
        })
        history.push(`/product-categories/${r.createProductCategory.id}`)
      }
    },
    onError: () => {},
  })

  const handleSubmit: IProductCategoryFormProps['onSubmit'] = (fields) => {
    createProductCategory({
      variables: {
        input: fields as any,
      },
    })
  }

  return (
    <UPageContainer title="Добавление продукта категории">
      <Form onSubmit={handleSubmit} loading={createProductCategoryRequest.loading} />
    </UPageContainer>
  )
}

export default AddProductCategoryPage
