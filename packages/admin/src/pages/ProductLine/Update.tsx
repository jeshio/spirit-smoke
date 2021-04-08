import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { useProductLineItemPageQuery, useUpdateProductLineMutation } from '@/gql/__generated__/types'
import useStableQuery from '@/hooks/gql/useStableQuery'
import { RouteComponentProps } from 'react-router'
import { notification } from 'antd'
import ProductLineForm, { IProductLineFormProps } from './Form'

interface IProductLineUpdatePageProps extends RouteComponentProps<{ id: string }> {}

const ProductLineUpdatePage: React.FunctionComponent<IProductLineUpdatePageProps> = (props) => {
  const { id } = props.match.params
  const [productLineQuery, productLineQueryComponent] = useStableQuery(useProductLineItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка продукта',
    queryName: 'productLine',
  })
  const [updateProductLine, updateProductLineRequest] = useUpdateProductLineMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Линейка продуктов успешно обновлена!',
        })
        props.history.push(`/product-lines/${id}`)
      }
    },
    onError: () => {},
  })
  const handleSubmit: IProductLineFormProps['onSubmit'] = (fields) => {
    updateProductLine({
      variables: {
        id,
        input: fields as any,
      },
    })
  }

  if (productLineQueryComponent || !productLineQuery?.data.productLine)
    return productLineQueryComponent as React.ReactElement

  const { productLine } = productLineQuery.data

  return (
    <UPageContainer title="Редактирование линейки продуктов">
      <ProductLineForm
        isUpdate
        productLine={productLine}
        loading={updateProductLineRequest.loading}
        onSubmit={handleSubmit}
      />
    </UPageContainer>
  )
}

export default ProductLineUpdatePage
