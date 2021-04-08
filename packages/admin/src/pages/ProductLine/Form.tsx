import * as React from 'react'
import UForm from '@/ui-components/UForm'
import { Card, Input } from 'antd'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'
import UButton from '@/ui-components/UButton'
import { ProductLineItemPageFragment } from '@/gql/__generated__/types'
import UBlock from '@/ui-components/UBlock'
import updateSlugOnChangeTitle from '@/helpers/updateSlugOnChangeTitle'
import ProductsTable from './components/ProductsTable'

export interface IProductLineFormProps {
  isUpdate?: boolean
  onSubmit: (values: Record<string, string>) => void
  productLine?: ProductLineItemPageFragment
  loading?: boolean
}

const ProductLineForm: React.FunctionComponent<IProductLineFormProps> = ({
  isUpdate = false,
  productLine,
  loading,
  onSubmit,
}) => {
  return (
    <UForm labelCol={{ span: 6, sm: 6, md: 9, lg: 9, xl: 7, xxl: 7 }} onFinish={onSubmit}>
      {(_, form) => (
        <Card>
          <URow>
            <UCol md={20} lg={18} xl={10} xxl={8}>
              <UBlock mt={{ xl: 6 }}>
                <UForm.Item label="Название" name="name" required initialValue={productLine?.name}>
                  <Input onChange={(e) => updateSlugOnChangeTitle(e.target.value, form)} />
                </UForm.Item>
                <UForm.Item label="Slug" name="slug" required initialValue={productLine?.slug}>
                  <Input />
                </UForm.Item>
                <UForm.Item label="Цвет в интерфейсе" name="color" initialValue={productLine?.color}>
                  <Input />
                </UForm.Item>
                <UForm.Item label="Штрихкод" name="barcode" initialValue={productLine?.barcode}>
                  <Input />
                </UForm.Item>
                <UForm.Item label="Страна" name="country" initialValue={productLine?.country}>
                  <Input />
                </UForm.Item>

                <UForm.Item wrapperCol={{ md: { offset: 2 } }}>
                  <UButton htmlType="submit" type="primary" loading={loading}>
                    {isUpdate ? 'Применить изменения' : 'Добавить'}
                  </UButton>
                  {isUpdate && productLine ? (
                    <UButton type="link" href={`/product-lines/${productLine.id}`}>
                      Вернуться к линейке продуктов
                    </UButton>
                  ) : (
                    <UButton href="/product-lines" type="link">
                      Вернуться к списку
                    </UButton>
                  )}
                </UForm.Item>
              </UBlock>
            </UCol>
            {isUpdate && (
              <UCol xl={{ offset: 2, span: 12 }} xxl={{ offset: 4, span: 12 }}>
                <Card title="Продукты линейки" size="small">
                  <ProductsTable
                    products={productLine?.products}
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
      )}
    </UForm>
  )
}

export default ProductLineForm
