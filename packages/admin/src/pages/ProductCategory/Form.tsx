import * as React from 'react'
import UForm from '@/ui-components/UForm'
import { Card, Input } from 'antd'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'
import UButton from '@/ui-components/UButton'
import { ProductCategoryItemPageFragment } from '@/gql/__generated__/types'
import UBlock from '@/ui-components/UBlock'
import ProductsTable from '../Company/components/ProductsTable'

export interface IProductCategoryFormProps {
  isUpdate?: boolean
  onSubmit: (values: Record<string, string>) => void
  productCategory?: ProductCategoryItemPageFragment
  loading?: boolean
}

const ProductCategoryForm: React.FunctionComponent<IProductCategoryFormProps> = ({
  isUpdate = false,
  productCategory,
  loading,
  onSubmit,
}) => {
  return (
    <UForm labelCol={{ span: 6, sm: 6, md: 9, lg: 9, xl: 7, xxl: 7 }} onFinish={onSubmit}>
      <Card>
        <URow>
          <UCol md={20} lg={18} xl={10} xxl={8}>
            <UBlock mt={{ xl: 6 }}>
              <UForm.Item label="Название" name="name" required initialValue={productCategory?.name}>
                <Input />
              </UForm.Item>
              <UForm.Item label="Slug" name="slug" required initialValue={productCategory?.slug}>
                <Input />
              </UForm.Item>
              <UForm.Item label="Описание" name="description" required initialValue={productCategory?.description}>
                <Input.TextArea />
              </UForm.Item>

              <UForm.Item wrapperCol={{ md: { offset: 2 } }}>
                <UButton htmlType="submit" type="primary" loading={loading}>
                  {isUpdate ? 'Применить изменения' : 'Добавить'}
                </UButton>
                {isUpdate && productCategory ? (
                  <UButton type="link" href={`/product-categories/${productCategory.id}`}>
                    Вернуться к категории
                  </UButton>
                ) : (
                  <UButton href="/product-categories" type="link">
                    Вернуться к списку
                  </UButton>
                )}
              </UForm.Item>
            </UBlock>
          </UCol>
          {isUpdate && (
            <UCol xl={{ offset: 2, span: 12 }} xxl={{ offset: 4, span: 12 }}>
              <Card title="Продукты категории" size="small">
                <ProductsTable
                  products={productCategory?.products}
                  tableProps={{
                    pagination: {
                      defaultPageSize: 5,
                    },
                  }}
                />
              </Card>
            </UCol>
          )}
        </URow>
      </Card>
    </UForm>
  )
}

export default ProductCategoryForm
