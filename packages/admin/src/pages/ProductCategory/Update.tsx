import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { notification } from 'antd'
import { useUpdateProductCategoryMutation, useProductCategoryItemPageQuery } from '@/gql/__generated__/types'
import { RouteComponentProps } from 'react-router'
import useStableQuery from '@/hooks/gql/useStableQuery'
import Form, { IProductCategoryFormProps } from './Form'

interface IUpdateProductCategoryPageProps
  extends RouteComponentProps<{
    id: string
  }> {}

const UpdateProductCategoryPage: React.FunctionComponent<IUpdateProductCategoryPageProps> = (props) => {
  const id = props.match.params.id || ''
  const [productCategoryQuery, productCategoryQueryComponent] = useStableQuery(useProductCategoryItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка категории продукта',
    queryName: 'productCategory',
  })
  const [updateProductCategory, updateProductCategoryRequest] = useUpdateProductCategoryMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Категория продуктов успешно обновлена!',
        })
        props.history.push(`/product-categories/${id}`)
      }
    },
    onError: () => {},
  })

  const handleSubmit: IProductCategoryFormProps['onSubmit'] = (fields) => {
    updateProductCategory({
      variables: {
        id,
        input: fields as any,
      },
    })
  }

  if (productCategoryQueryComponent || !productCategoryQuery?.data.productCategory)
    return productCategoryQueryComponent as React.ReactElement

  const { productCategory } = productCategoryQuery.data

  return (
    <UPageContainer title={`Редактирование категории продуктов ${productCategory.name}`}>
      <Form
        onSubmit={handleSubmit}
        loading={updateProductCategoryRequest.loading}
        productCategory={productCategory}
        isUpdate
      />
    </UPageContainer>
  )
}

export default UpdateProductCategoryPage
