import * as React from 'react'
import { Input, Card, InputNumber, Select } from 'antd'
import UForm from '@/ui-components/UForm'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'
import UButton from '@/ui-components/UButton'
import {
  useProductCategoryMinimumListQuery,
  useCompanyMinimumListQuery,
  ProductSimpleItemQuery,
} from '@/gql/__generated__/types'
import numberToPrice from '@@utils/src/numberToPrice'
import TextArea from 'antd/lib/input/TextArea'

export interface IFormProps {
  loading?: boolean
  onSubmit: (values: Record<string, string>) => void
  isUpdate?: boolean
  product?: ProductSimpleItemQuery['product']
}

const Form: React.FunctionComponent<IFormProps> = ({ loading = false, onSubmit, isUpdate = false, product }) => {
  const categoriesRequest = useProductCategoryMinimumListQuery()
  const companyRequest = useCompanyMinimumListQuery()
  const handleSubmit = (fields: any) =>
    onSubmit({
      ...fields,
      price: numberToPrice(parseFloat(fields.price)),
    })

  return (
    <UForm onFinish={handleSubmit} labelCol={{ span: 6, sm: 6, md: 9, lg: 9, xl: 7, xxl: 7 }}>
      <Card loading={categoriesRequest.loading || companyRequest.loading}>
        <URow>
          <UCol md={12} xxl={8}>
            <UForm.Item label="Категория" name="productCategoryId" required initialValue={product?.productCategoryId}>
              <Select>
                {categoriesRequest.data?.productCategories.map(({ id, name }) => (
                  <Select.Option value={id} key={id}>
                    ({id}) {name}
                  </Select.Option>
                ))}
              </Select>
            </UForm.Item>
            <UForm.Item label="Изображение" name="imageUrl" required initialValue={product?.imageUrl}>
              <Input />
            </UForm.Item>
            <UForm.Item label="Название" name="name" required initialValue={product?.name}>
              <Input />
            </UForm.Item>
            <UForm.Item label="Slug" required name="slug" initialValue={product?.slug}>
              <Input disabled={isUpdate} />
            </UForm.Item>
          </UCol>
          <UCol md={12} xxl={8}>
            <UForm.Item label="Производитель" name="companyId" required initialValue={product?.companyId}>
              <Select>
                {companyRequest.data?.companies.map(({ id, name }) => (
                  <Select.Option value={id} key={id}>
                    ({id}) {name}
                  </Select.Option>
                ))}
              </Select>
            </UForm.Item>
            <UForm.Item label="Количество" help="Добавляется поставками, убавляется заказами и списаниями">
              <InputNumber name="count" disabled value={isUpdate ? product?.count : 0} />
            </UForm.Item>
            <UForm.Item label="Цена (₽)" required name="price" initialValue={product?.price}>
              <InputNumber min={0} />
            </UForm.Item>
          </UCol>
        </URow>

        <URow>
          <UCol md={24} xl={18} xxl={12}>
            <UForm.Item
              label="Описание"
              name="description"
              initialValue={product?.description}
              labelCol={{ sm: 6, md: 4, xl: 4, xxl: 5 }}
              wrapperCol={{
                span: 0,
              }}
              required
            >
              <TextArea />
            </UForm.Item>
          </UCol>
        </URow>

        <UForm.Item wrapperCol={{ md: { offset: 2 } }}>
          <UButton htmlType="submit" type="primary" loading={loading}>
            {isUpdate ? 'Применить изменения' : 'Добавить'}
          </UButton>
          {isUpdate ? (
            <UButton href={`/products/${product?.id || ''}`} type="link">
              Вернуться к продукту
            </UButton>
          ) : (
            <UButton href="/products" type="link">
              Вернуться к списку
            </UButton>
          )}
        </UForm.Item>
      </Card>
    </UForm>
  )
}

export default Form
