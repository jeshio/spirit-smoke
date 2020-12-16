import { OrderItemPageFragment } from '@/gql/__generated__/types'
import UBlock from '@/ui-components/UBlock'
import UButton from '@/ui-components/UButton'
import UCol from '@/ui-components/UCol'
import UForm from '@/ui-components/UForm'
import { UItemsSelectorValueObjectType } from '@/ui-components/UItemsSelector'
import URow from '@/ui-components/URow'
import UWProductsSelector from '@/ui-widgets/UWProductsSelector'
import { Card, Input, InputNumber, Select } from 'antd'
import React, { useCallback, useMemo } from 'react'
import { ORDER_STATUSES } from './constants'

export interface IOrderFormProps {
  order?: OrderItemPageFragment
  onSubmit: (values: Record<string, string>) => void
  loading?: boolean
  isUpdate?: boolean
}

const OrderForm: React.FunctionComponent<IOrderFormProps> = ({ order, loading, isUpdate, onSubmit }) => {
  const selectedProductIds = useMemo(
    () => order?.orderProducts?.map(({ product, productsCount }) => ({ id: product.id, count: productsCount })) || [],
    [order]
  )
  const handleSubmit = useCallback(
    (fields: any) =>
      onSubmit({
        ...fields,
        products: fields?.products.map(({ id, count }: UItemsSelectorValueObjectType) => ({
          id,
          productsCount: Number(count) || 0,
        })),
      }),
    [onSubmit]
  )

  return (
    <UForm labelCol={{ sm: 7, lg: 6, xl: 8, xxl: 9 }} onFinish={handleSubmit}>
      <Card>
        <URow>
          <UCol xl={12} xxl={8}>
            <UForm.Item label="Адрес" name="address" required initialValue={order?.address}>
              <Input />
            </UForm.Item>
            <UForm.Item label="Время доставки" name="deliveryTime" required initialValue={order?.deliveryTime}>
              <Input />
            </UForm.Item>
            <UForm.Item label="Телефон" name="phoneNumber" required initialValue={order?.phoneNumber}>
              <Input />
            </UForm.Item>
            <UForm.Item label="Комментарий клиента" name="comment" initialValue={order?.comment}>
              <Input />
            </UForm.Item>
            <UForm.Item label="Код домофона" name="intercomCode" initialValue={order?.intercomCode}>
              <Input />
            </UForm.Item>
            <UForm.Item label="Количество персон" name="personsCount" initialValue={order?.personsCount}>
              <InputNumber />
            </UForm.Item>
          </UCol>
          <UCol xl={12} xxl={8}>
            <UForm.Item label="Наш комментарий" name="ourComment" initialValue={order?.ourComment}>
              <Input />
            </UForm.Item>
            <UForm.Item label="Статус" name="status" required initialValue={order?.status}>
              <Select>
                {Object.keys(ORDER_STATUSES).map((status) => (
                  <Select.Option value={status} key={status}>
                    {ORDER_STATUSES[status]}
                  </Select.Option>
                ))}
              </Select>
            </UForm.Item>
          </UCol>
        </URow>

        <UBlock pt={2}>
          <URow>
            <UCol xl={14} xxl={12}>
              <UForm.Item
                label="Продукты"
                name="products"
                required
                initialValue={selectedProductIds}
                labelCol={{
                  sm: 7,
                  lg: 6,
                  xl: 6,
                  xxl: 6,
                }}
              >
                <UWProductsSelector withCount />
              </UForm.Item>
            </UCol>
          </URow>
        </UBlock>

        <UBlock pt={2}>
          <UForm.Item wrapperCol={{ md: { offset: 2 } }}>
            <UButton htmlType="submit" type="primary" loading={loading}>
              {isUpdate ? 'Применить изменения' : 'Добавить'}
            </UButton>
            {isUpdate && order ? (
              <UButton href={`/orders/${order.id}`} type="link">
                Вернуться к заказу
              </UButton>
            ) : (
              <UButton href="/orders" type="link">
                Вернуться к списку
              </UButton>
            )}
          </UForm.Item>
        </UBlock>
      </Card>
    </UForm>
  )
}

export default OrderForm
