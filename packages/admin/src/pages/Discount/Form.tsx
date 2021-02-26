import * as React from 'react'
import UForm from '@/ui-components/UForm'
import { Card, DatePicker, Input, InputNumber, Switch } from 'antd'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'
import UButton from '@/ui-components/UButton'
import { DiscountItemPageFragment } from '@/gql/__generated__/types'
import UBlock from '@/ui-components/UBlock'

export interface IDiscountFormProps {
  isUpdate?: boolean
  onSubmit: (values: Record<string, string>) => void
  discount?: DiscountItemPageFragment
  loading?: boolean
}

const DiscountForm: React.FunctionComponent<IDiscountFormProps> = ({
  isUpdate = false,
  discount,
  loading,
  onSubmit,
}) => {
  return (
    <UForm labelCol={{ span: 6, sm: 6, md: 9, lg: 9, xl: 7, xxl: 7 }} onFinish={onSubmit}>
      <Card>
        <URow>
          <UCol md={20} lg={18} xl={10} xxl={8}>
            <UBlock mt={{ xl: 6 }}>
              <UForm.Item label="Название" name="name" required initialValue={discount?.name}>
                <Input />
              </UForm.Item>
              <UForm.Item label="Код" name="code" required initialValue={discount?.code}>
                <Input />
              </UForm.Item>
              <UForm.Item label="Скидка в ₽" name="rub" initialValue={discount?.rub}>
                <InputNumber min={0} defaultValue={0} />
              </UForm.Item>
              <UForm.Item label="Скидка в %" name="percent" initialValue={discount?.percent}>
                <InputNumber min={0} defaultValue={0} />
              </UForm.Item>
              <UForm.Item label="Одноразовый промокод" name="isDisposable" initialValue={false}>
                <Switch defaultChecked={false} />
              </UForm.Item>
              <UForm.Item label="Скидка на все товары" name="isGlobal" initialValue>
                <Switch defaultChecked />
              </UForm.Item>
              <UForm.Item label="Дата начала действия" name="startDate" required>
                <DatePicker />
              </UForm.Item>
              <UForm.Item label="Дата окончания действия" name="endDate" required>
                <DatePicker />
              </UForm.Item>

              <UForm.Item wrapperCol={{ md: { offset: 2 } }}>
                <UButton htmlType="submit" type="primary" loading={loading}>
                  {isUpdate ? 'Применить изменения' : 'Добавить'}
                </UButton>
                {isUpdate && discount ? (
                  <UButton type="link" href={`/discounts/${discount.id}`}>
                    Вернуться к скидке
                  </UButton>
                ) : (
                  <UButton href="/discounts" type="link">
                    Вернуться к списку
                  </UButton>
                )}
              </UForm.Item>
            </UBlock>
          </UCol>
        </URow>
      </Card>
    </UForm>
  )
}

export default DiscountForm
