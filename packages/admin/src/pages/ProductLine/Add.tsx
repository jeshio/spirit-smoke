import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { useCreateProductLineMutation } from '@/gql/__generated__/types'
import { RouteComponentProps } from 'react-router'
import { notification } from 'antd'
import ProductLineForm, { IProductLineFormProps } from './Form'

interface IAddProductLinePageProps extends RouteComponentProps {}

const AddProductLinePage: React.FunctionComponent<IAddProductLinePageProps> = (props) => {
  const [createProductLine, createProductLineRequest] = useCreateProductLineMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Линейка продуктов успешно добавлена!',
        })
        props.history.push(`/product-lines/${r.createProductLine.id}`)
      }
    },
    onError: () => {},
  })

  const handleSubmit: IProductLineFormProps['onSubmit'] = (fields) => {
    createProductLine({
      variables: {
        input: fields,
      },
    })
  }

  return (
    <UPageContainer title="Добавить линейку">
      <ProductLineForm loading={createProductLineRequest.loading} onSubmit={handleSubmit} />
    </UPageContainer>
  )
}

export default AddProductLinePage
