import { ProcurementItemPageFragment } from '@/gql/__generated__/types'
import UBlock from '@/ui-components/UBlock'
import UButton from '@/ui-components/UButton'
import UCol from '@/ui-components/UCol'
import UForm from '@/ui-components/UForm'
import { UItemsSelectorValueObjectType } from '@/ui-components/UItemsSelector'
import URow from '@/ui-components/URow'
import UWProductsSelector from '@/ui-widgets/UWProductsSelector'
import { Card, DatePicker, Input, InputNumber, Select } from 'antd'
import moment from 'moment'
import React, { useCallback, useMemo, useState } from 'react'
import { Prompt } from 'react-router-dom'
import { PROCUREMENT_STATUSES } from './constants'

export interface IProcurementFormProps {
  procurement?: ProcurementItemPageFragment
  onSubmit: (values: Record<string, string>) => void
  loading?: boolean
  isUpdate?: boolean
}

const ProcurementForm: React.FunctionComponent<IProcurementFormProps> = ({
  procurement,
  loading,
  isUpdate,
  onSubmit,
}) => {
  const [checkIsFinished, setCheckIsFinished] = useState(false)
  const selectedProductIds = useMemo(
    () =>
      procurement?.productProcurements.map(({ product, count, costs }) => ({ id: product.id, count, price: costs })) ||
      [],
    [procurement]
  )
  const handleSubmit = useCallback(
    (fields: any) => {
      setCheckIsFinished(true)
      onSubmit({
        ...fields,
        products: fields?.products.map(({ id, count, price }: UItemsSelectorValueObjectType) => ({
          id,
          count: Number(count) || 0,
          costs: price,
        })),
      })
    },
    [onSubmit]
  )

  return (
    <UForm labelCol={{ sm: 7, lg: 6, xl: 10 }} onFinish={handleSubmit}>
      <Prompt message="Вы уверены, что хотите покинуть страницу?" when={!checkIsFinished} />

      <Card>
        <URow>
          <UCol xl={8}>
            <UForm.Item label="Название" name="name" required initialValue={procurement?.name}>
              <Input />
            </UForm.Item>
          </UCol>
        </URow>
        <URow>
          <UCol xl={8}>
            <UForm.Item
              label="Дата следующего статуса"
              name="nextStatusDate"
              required
              initialValue={procurement?.nextStatusDate ? moment(procurement?.nextStatusDate) : ''}
            >
              <DatePicker />
            </UForm.Item>
          </UCol>
          <UCol xl={5}>
            <UForm.Item label="Статус" name="status" required initialValue={procurement?.status}>
              <Select>
                {Object.keys(PROCUREMENT_STATUSES).map((status) => (
                  <Select.Option value={status} key={status}>
                    {PROCUREMENT_STATUSES[status]}
                  </Select.Option>
                ))}
              </Select>
            </UForm.Item>
          </UCol>
          <UCol xl={8}>
            <UForm.Item
              label="Стоимость доставки"
              name="deliveryCost"
              required
              initialValue={procurement?.deliveryCost || 0}
            >
              <InputNumber />
            </UForm.Item>
          </UCol>
        </URow>
        <URow>
          <UCol xl={8}>
            <UForm.Item label="Инфа о поставщике" name="providerInfo" initialValue={procurement?.providerInfo}>
              <Input.TextArea rows={4} />
            </UForm.Item>
          </UCol>
          <UCol xl={8}>
            <UForm.Item
              label="Комментарий"
              name="comment"
              initialValue={procurement?.comment}
              labelCol={{
                sm: 7,
                lg: 6,
                xl: 6,
              }}
            >
              <Input.TextArea rows={4} />
            </UForm.Item>
          </UCol>
        </URow>

        <UBlock pt={2}>
          <URow>
            <UCol xl={14} xxl={12}>
              <UForm.Item
                label="Продукты"
                name="products"
                initialValue={selectedProductIds}
                labelCol={{
                  sm: 7,
                  lg: 6,
                  xl: 6,
                  xxl: 7,
                }}
              >
                <UWProductsSelector withCount withPriceSetter />
              </UForm.Item>
            </UCol>
          </URow>
        </UBlock>

        <UBlock pt={2}>
          <UForm.Item wrapperCol={{ md: { offset: 2 } }}>
            <UButton htmlType="submit" type="primary" loading={loading}>
              {isUpdate ? 'Применить изменения' : 'Добавить'}
            </UButton>
            {isUpdate && procurement ? (
              <UButton href={`/procurements/${procurement.id}`} type="link">
                Вернуться к поставке
              </UButton>
            ) : (
              <UButton href="/procurements" type="link">
                Вернуться к списку
              </UButton>
            )}
          </UForm.Item>
        </UBlock>
      </Card>
    </UForm>
  )
}

export default ProcurementForm
