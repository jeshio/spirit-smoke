import * as React from 'react'
import { Input, Card, InputNumber, Select } from 'antd'
import UForm from '@/ui-components/UForm'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'
import UButton from '@/ui-components/UButton'
import {
  useProductCategoryMinimumListQuery,
  useCompanyMinimumListQuery,
  ProductItemPageFragment,
} from '@/gql/__generated__/types'
import numberToPrice from '@@utils/src/numberToPrice'
import TextArea from 'antd/lib/input/TextArea'
import UItemsSelector from '@/ui-components/UItemsSelector'
import UBlock from '@/ui-components/UBlock'
import updateSlugOnChangeTitle from '@/helpers/updateSlugOnChangeTitle'

export interface IProductFormProps {
  loading?: boolean
  onSubmit: (values: Record<string, string>) => void
  isUpdate?: boolean
  product?: ProductItemPageFragment
}

const ProductForm: React.FunctionComponent<IProductFormProps> = ({
  loading = false,
  onSubmit,
  isUpdate = false,
  product,
}) => {
  const categoriesRequest = useProductCategoryMinimumListQuery()
  const companyRequest = useCompanyMinimumListQuery()
  const handleSubmit = (fields: any) =>
    onSubmit({
      ...fields,
      features: fields?.features?.map((featureId: string) => ({
        featureId,
      })),
      price: numberToPrice(parseFloat(fields.price)),
      weight: Number(fields.weight || 0),
    })
  const featureOptions =
    React.useMemo(
      () =>
        product?.productCategory?.features.map((feature) => ({
          title: feature.name,
          value: feature.id,
          iconUrl: feature.imageUrl,
          link: `/features/${feature.id}`,
          isDisabled: feature.isDisabled,
        })) as React.ComponentProps<typeof UItemsSelector>['optionsToAdd'],
      [product?.productCategory]
    ) || []
  const initialSelectedFeatureIds = React.useMemo(() => product?.productFeatures.map(({ feature: { id } }) => id), [
    product,
  ])

  return (
    <UForm onFinish={handleSubmit} labelCol={{ span: 6, sm: 6, md: 9, lg: 9, xl: 7, xxl: 7 }}>
      {(fields, form) => {
        const companyWarning = isUpdate && !product?.company && fields.companyId === product?.companyId
        const productCategoryWarning =
          isUpdate && !product?.productCategory && fields.productCategoryId === product?.productCategoryId
        const featuresSelectorIsDisabled = isUpdate && product?.productCategoryId !== fields.productCategoryId
        return (
          <Card loading={categoriesRequest.loading || companyRequest.loading}>
            <URow>
              <UCol md={12} xxl={8}>
                <UForm.Item
                  label="Категория"
                  name="productCategoryId"
                  required
                  initialValue={product?.productCategoryId}
                  help={productCategoryWarning && 'Эта категория удалена, продукт невидим'}
                  validateStatus={(productCategoryWarning && 'warning') || undefined}
                >
                  <Select>
                    {categoriesRequest.data?.productCategories.map(({ id, name }) => (
                      <Select.Option value={id} key={id}>
                        ({id}) {name}
                      </Select.Option>
                    ))}
                  </Select>
                </UForm.Item>
                <UForm.Item label="Изображение" name="imageUrl" initialValue={product?.imageUrl}>
                  <Input />
                </UForm.Item>
                <UForm.Item label="Название" name="name" required initialValue={product?.name}>
                  <Input onChange={(e) => updateSlugOnChangeTitle(e.target.value, form)} />
                </UForm.Item>
                <UForm.Item label="Штрихкод" name="barcode" initialValue={product?.barcode}>
                  <Input />
                </UForm.Item>
                <UForm.Item label="Вес (г)" name="weight" initialValue={product?.weight || 0}>
                  <Input type="number" />
                </UForm.Item>
                <UForm.Item label="Slug" required name="slug" initialValue={product?.slug}>
                  <Input disabled={isUpdate} />
                </UForm.Item>
                <UForm.Item
                  label="Особенности"
                  name="features"
                  initialValue={initialSelectedFeatureIds}
                  help={featuresSelectorIsDisabled && 'При смене категории все особенности продукта будут убраны'}
                  validateStatus={(featuresSelectorIsDisabled && 'warning') || undefined}
                >
                  <UItemsSelector
                    optionsToAdd={featureOptions}
                    loading={loading}
                    enableToSelectDisabledItems
                    disabled={featuresSelectorIsDisabled}
                    value={featuresSelectorIsDisabled ? [] : undefined}
                  />
                </UForm.Item>
              </UCol>
              <UCol md={12} xxl={8}>
                <UForm.Item
                  label="Производитель"
                  name="companyId"
                  required
                  initialValue={product?.companyId}
                  help={companyWarning && 'Этот производитель удалён, продукт невидим'}
                  validateStatus={(companyWarning && 'warning') || undefined}
                >
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
                <UForm.Item
                  label="Описание"
                  name="description"
                  initialValue={product?.description}
                  wrapperCol={{
                    span: 0,
                  }}
                  required
                >
                  <TextArea rows={5} />
                </UForm.Item>
              </UCol>
            </URow>

            <UBlock pt={2}>
              <UForm.Item wrapperCol={{ md: { offset: 2 } }}>
                <UButton htmlType="submit" type="primary" loading={loading}>
                  {isUpdate ? 'Применить изменения' : 'Добавить'}
                </UButton>
                {isUpdate && product ? (
                  <UButton href={`/products/${product.id}`} type="link">
                    Вернуться к продукту
                  </UButton>
                ) : (
                  <UButton href="/products" type="link">
                    Вернуться к списку
                  </UButton>
                )}
              </UForm.Item>
            </UBlock>
          </Card>
        )
      }}
    </UForm>
  )
}

export default ProductForm
