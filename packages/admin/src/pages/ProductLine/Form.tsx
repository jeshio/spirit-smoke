import React, { ChangeEvent } from 'react'
import UForm from '@/ui-components/UForm'
import { Card, Input, InputNumber, Select } from 'antd'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'
import UButton from '@/ui-components/UButton'
import {
  useProductCategoryMinimumListQuery,
  ProductLineItemPageFragment,
  useCompanyMinimumListQuery,
} from '@/gql/__generated__/types'
import UBlock from '@/ui-components/UBlock'
import updateSlugOnChangeTitle from '@/helpers/updateSlugOnChangeTitle'
import { FormInstance } from 'rc-field-form/lib/interface'
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
  const categoriesRequest = useProductCategoryMinimumListQuery()
  const companiesRequest = useCompanyMinimumListQuery()
  const handleChangeName = (form: FormInstance) => (e?: ChangeEvent<HTMLInputElement>) => {
    updateSlugOnChangeTitle(e?.target.value || '', form)
  }

  return (
    <UForm labelCol={{ span: 6, sm: 6, md: 9, lg: 9, xl: 7, xxl: 7 }} onFinish={onSubmit}>
      {(fields, form) => {
        const productCategoryWarning =
          isUpdate && !productLine?.productCategory && fields.productCategoryId === productLine?.productCategoryId
        const companyWarning = isUpdate && !productLine?.company && fields.companyId === productLine?.companyId

        return (
          <Card>
            <URow>
              <UCol md={20} lg={18} xl={10} xxl={9}>
                <UBlock mt={{ xl: 6 }}>
                  <UForm.Item
                    label="Компания"
                    name="companyId"
                    required
                    initialValue={productLine?.companyId}
                    help={companyWarning && 'Компания не установлена или удалена, линейка невидима'}
                    validateStatus={(companyWarning && 'error') || undefined}
                  >
                    <Select>
                      {companiesRequest.data?.companies.map(({ id, name }) => (
                        <Select.Option value={id} key={id}>
                          ({id}) {name}
                        </Select.Option>
                      ))}
                    </Select>
                  </UForm.Item>
                  <UForm.Item
                    label="Категория"
                    name="productCategoryId"
                    required
                    initialValue={productLine?.productCategoryId}
                    help={productCategoryWarning && 'Категория не установлена или удалена, линейка невидима'}
                    validateStatus={(productCategoryWarning && 'error') || undefined}
                  >
                    <Select>
                      {categoriesRequest.data?.productCategories.map(({ id, name }) => (
                        <Select.Option value={id} key={id}>
                          ({id}) {name}
                        </Select.Option>
                      ))}
                    </Select>
                  </UForm.Item>
                  <UForm.Item label="Название" name="name" required initialValue={productLine?.name}>
                    <Input onChange={handleChangeName(form)} />
                  </UForm.Item>
                  <UForm.Item label="Slug" name="slug" required initialValue={productLine?.slug}>
                    <Input />
                  </UForm.Item>
                  <UForm.Item label="Вес (г)" name="weight" initialValue={productLine?.weight || 0}>
                    <InputNumber min={0} />
                  </UForm.Item>
                  <UForm.Item label="Цена (₽)" name="price" initialValue={productLine?.price}>
                    <InputNumber min={0} />
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
                <UCol xl={{ offset: 2, span: 12 }} xxl={{ offset: 4, span: 11 }}>
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
        )
      }}
    </UForm>
  )
}

export default ProductLineForm
