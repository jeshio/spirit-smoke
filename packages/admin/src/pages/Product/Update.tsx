import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { notification } from 'antd'
import { useUpdateProductMutation, useProductItemPageQuery } from '@/gql/__generated__/types'
import { RouteComponentProps } from 'react-router'
import useStableQuery from '@/hooks/gql/useStableQuery'
import ProductForm, { IProductFormProps } from './Form'

interface IUpdateProductPageProps
  extends RouteComponentProps<{
    id: string
  }> {}

const UpdateProductPage: React.FunctionComponent<IUpdateProductPageProps> = (props) => {
  const id = props.match.params.id || ''
  const [productQuery, productQueryComponent] = useStableQuery(useProductItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка продукта',
    queryName: 'product',
  })
  const [updateProduct, updateProductRequest] = useUpdateProductMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Продукт успешно обновлён!',
        })
        props.history.push(`/products/${id}`)
      }
    },
    onError: () => {},
  })

  const handleSubmit: IProductFormProps['onSubmit'] = (fields) => {
    updateProduct({
      variables: {
        id,
        input: fields as any,
      },
    })
  }

  if (productQueryComponent || !productQuery?.data.product) return productQueryComponent as React.ReactElement

  const { product } = productQuery.data

  return (
    <UPageContainer title={`Редактирование продукта ${product.name}`}>
      <ProductForm onSubmit={handleSubmit} loading={updateProductRequest.loading} product={product} isUpdate />
    </UPageContainer>
  )
}

export default UpdateProductPage
