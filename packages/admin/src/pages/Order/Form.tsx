import {
  OrderItemPageFragment,
  useDiscountByCodeLazyQuery,
  useOrderTotalLazyQuery,
  Maybe,
} from '@/gql/__generated__/types'
import useBarcodeScanner from '@/hooks/useBarcodeScanner'
import UBlock from '@/ui-components/UBlock'
import UButton from '@/ui-components/UButton'
import UCol from '@/ui-components/UCol'
import UDescriptions from '@/ui-components/UDescriptions'
import UDiscountStatus from '@/ui-components/UDiscountStatus'
import UForm from '@/ui-components/UForm'
import { UItemsSelectorValueObjectType } from '@/ui-components/UItemsSelector'
import UPrice from '@/ui-components/UPrice'
import URow from '@/ui-components/URow'
import UWProductsSelector from '@/ui-widgets/UWProductsSelector'
import { Card, Input, Select } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { noop } from 'lodash'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ORDER_STATUSES } from './constants'

export interface IOrderFormProps {
  order?: OrderItemPageFragment
  onSubmit: (values: Record<string, string>) => void
  loading?: boolean
  isUpdate?: boolean
}

const OrderForm: React.FunctionComponent<IOrderFormProps> = ({ order, loading, isUpdate, onSubmit }) => {
  const [addProductByBarcode, setAddProductByBarcode] = useState<(barcode: string) => void>()
  const [getOrderTotal, currentOrderTotal] = useOrderTotalLazyQuery()
  const initialSelectedProducts = useMemo(
    () =>
      order?.orderProducts?.map(({ product, productsCount }) => ({ id: product.id, count: productsCount, product })) ||
      [],
    [order]
  )
  const [currentSelectedProducts, setCurrentSelectedProducts] = useState(initialSelectedProducts)
  const updateOrderTotal = (currentDiscountCode?: Maybe<string>) =>
    getOrderTotal({
      variables: {
        products: currentSelectedProducts.map((item) => ({
          id: item.id,
          productsCount: item.count,
        })),
        discountCode: currentDiscountCode,
      },
    })
  const [getDiscountByCode, currentDiscountByCode] = useDiscountByCodeLazyQuery()
  const { discountByCode } = currentDiscountByCode.data || {}
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
  const handleApplyDiscountCodeClick = (fields: { discountCode?: string }) => () => {
    getDiscountByCode({
      variables: {
        code: fields.discountCode || '',
      },
    })
  }
  const orderTotal = isUpdate ? order?.orderTotal : currentOrderTotal.data?.orderTotal

  const setAddProductByBarcodeFn = (setter: typeof addProductByBarcode) => {
    setAddProductByBarcode(() => setter)
  }

  useBarcodeScanner({
    onEnter: addProductByBarcode || noop,
    isActive: !isUpdate,
    disableInputSetter: true,
  })

  useEffect(() => {
    updateOrderTotal(currentDiscountByCode.data?.discountByCode?.code)
  }, [currentSelectedProducts, currentDiscountByCode.data?.discountByCode?.code])

  return (
    <UForm labelCol={{ sm: 7, lg: 6, xl: 8, xxl: 9 }} onFinish={handleSubmit}>
      {(values) => (
        <>
          <Card>
            <URow>
              <UCol xl={12} xxl={8}>
                {/* <UForm.Item label="Адрес" name="address" initialValue={order?.address}>
              <Input />
            </UForm.Item>
            <UForm.Item label="Время доставки" name="deliveryTime" initialValue={order?.deliveryTime}>
              <Input />
            </UForm.Item>
            <UForm.Item label="Телефон" name="phoneNumber" initialValue={order?.phoneNumber}>
              <Input />
            </UForm.Item> */}
                <UForm.Item label="Наш комментарий" name="ourComment" initialValue={order?.ourComment}>
                  <TextArea />
                </UForm.Item>
                {/* <UForm.Item label="Код домофона" name="intercomCode" initialValue={order?.intercomCode}>
              <Input />
            </UForm.Item>
            <UForm.Item label="Количество персон" name="personsCount" initialValue={order?.personsCount}>
              <InputNumber />
            </UForm.Item> */}
              </UCol>
              <UCol xl={12} xxl={8}>
                <UForm.Item label="Комментарий клиента" name="comment" initialValue={order?.comment}>
                  <TextArea />
                </UForm.Item>
                <UForm.Item label="Статус" name="status" required initialValue={order?.status || 'SUCCESS'}>
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
                <UCol xl={14} xxl={16}>
                  <UForm.Item
                    label="Продукты"
                    name="products"
                    required
                    initialValue={initialSelectedProducts}
                    labelCol={{
                      sm: 7,
                      lg: 6,
                      xl: 6,
                      xxl: 6,
                    }}
                    help={!isUpdate && 'Отсканируйте штрихкод, чтобы добавить в список покупок'}
                  >
                    <UWProductsSelector
                      withCount
                      onChange={setCurrentSelectedProducts}
                      disabled={isUpdate}
                      setAddProductByBarcodeFn={setAddProductByBarcodeFn}
                    />
                  </UForm.Item>
                </UCol>
              </URow>
            </UBlock>
          </Card>

          <Card loading={currentDiscountByCode.loading || currentOrderTotal.loading}>
            <URow>
              <UCol xl={12} xxl={8}>
                <UForm.Item label="Промокод" name="discountCode">
                  <Input
                    disabled={isUpdate || currentDiscountByCode.loading}
                    {...(isUpdate && { defaultValue: order?.discounts[0]?.code || undefined })}
                  />
                </UForm.Item>
              </UCol>
              <UCol xl={6} xxl={5}>
                <UForm.Item wrapperCol={{ sm: { offset: 7 }, md: { offset: 7 }, lg: { offset: 6 }, xl: { offset: 0 } }}>
                  <UButton
                    onClick={handleApplyDiscountCodeClick(values)}
                    loading={currentDiscountByCode.loading}
                    disabled={isUpdate}
                  >
                    Проверить и применить
                  </UButton>
                </UForm.Item>
              </UCol>
              <UCol xl={6} xxl={8}>
                <UForm.Item wrapperCol={{ sm: { offset: 7 }, md: { offset: 7 }, lg: { offset: 6 }, xl: { offset: 0 } }}>
                  <UDiscountStatus discount={discountByCode} />
                </UForm.Item>
              </UCol>
            </URow>
            {orderTotal && (
              <UDescriptions>
                <UDescriptions.Item label="Цена без скидки">
                  <UPrice>{orderTotal?.totalPrice}</UPrice>
                </UDescriptions.Item>
                <UDescriptions.Item label="Скидки">
                  <UPrice>{orderTotal?.totalDiscount}</UPrice>
                </UDescriptions.Item>
                <UDescriptions.Item label="Итого">
                  <UPrice>{orderTotal?.totalPriceWithDiscount}</UPrice>
                </UDescriptions.Item>
              </UDescriptions>
            )}
          </Card>

          <Card>
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
        </>
      )}
    </UForm>
  )
}

export default OrderForm
