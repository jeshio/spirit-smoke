import { InputNumber, Modal, Select } from 'antd'
import * as React from 'react'
import { useAddProductModalProcurementsQuery, useAddProcurementProductMutation } from '@/gql/__generated__/types'
import UForm from '@/ui-components/UForm'
import { useForm } from 'antd/lib/form/Form'

interface IUWAddProductToProcurementModalProps {
  visible: boolean
  onClose: () => void
  productId: string
}

const UWAddProductToProcurementModal: React.FunctionComponent<IUWAddProductToProcurementModalProps> = ({
  visible,
  onClose,
  productId,
}) => {
  const procurementsRequest = useAddProductModalProcurementsQuery()
  const [addProduct, addProductRequest] = useAddProcurementProductMutation()
  const [form] = useForm()
  const handleSubmit = async ({
    procurementId,
    count,
    costs,
  }: {
    procurementId: string
    count: string
    costs: string
  }) => {
    try {
      await addProduct({
        variables: {
          procurementId,
          input: {
            costs: Number(costs),
            count: Number(count) || 0,
            id: productId,
          },
        },
      })
      onClose()
      form.resetFields()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <UForm onFinish={handleSubmit as any} form={form}>
      <Modal
        title="Добавить продукт в поставку"
        visible={visible}
        onCancel={onClose}
        onOk={form.submit}
        confirmLoading={addProductRequest.loading}
      >
        <UForm.Item label="Поставка (со статусом BUILDING)" name="procurementId" required>
          <Select loading={procurementsRequest.loading}>
            {procurementsRequest.data?.procurements.map(({ id, name }) => (
              <Select.Option value={id} key={id}>
                #{id}, {name}
              </Select.Option>
            ))}
          </Select>
        </UForm.Item>
        <UForm.Item label="Количество" name="count" initialValue="10" required>
          <InputNumber />
        </UForm.Item>
        <UForm.Item label="Цена" name="costs">
          <InputNumber />
        </UForm.Item>
      </Modal>
    </UForm>
  )
}

export default UWAddProductToProcurementModal
