import { useAddExecutionTypeProductModalProductLazyQuery, useCreateProductMutation } from '@/gql/__generated__/types'
import getSlugByName from '@/helpers/getSlugByName'
import UForm from '@/ui-components/UForm'
import UPrice from '@/ui-components/UPrice'
import UWeight from '@/ui-components/UWeight'
import { Modal, notification, Select } from 'antd'
import React, { FunctionComponent, useEffect, useMemo } from 'react'
import { useHistory } from 'react-router-dom'

interface IUWAddExecutionTypeProductModalProps {
  visible: boolean
  onClose: () => void
  originalProductId?: string
}

const UWAddExecutionTypeProductModal: FunctionComponent<IUWAddExecutionTypeProductModalProps> = ({
  visible,
  onClose,
  originalProductId,
}) => {
  const history = useHistory()
  const [fetchOriginalProduct, originalProductRequest] = useAddExecutionTypeProductModalProductLazyQuery()
  const [createProduct, createProductRequest] = useCreateProductMutation()
  const executionTypes = useMemo(
    () =>
      originalProductRequest.data?.product?.productLine?.executionTypes.filter(
        (item) =>
          !originalProductRequest.data?.product?.executionTypeProducts.some(
            ({ executionType }) => item.id === executionType?.id
          )
      ) || [],
    [originalProductRequest.data]
  )

  const handleSubmit = async (values: any) => {
    const { executionTypeId } = values
    const product = originalProductRequest.data?.product
    const executionType = executionTypes.find(({ id }) => executionTypeId === id)

    if (!product || !product.productLine || !executionType) {
      return
    }

    const name = `${product.productLine.company?.name || ''} ${product.productLine.name} ${product.name} ${
      executionType.note
    }`

    const response = await createProduct({
      variables: {
        input: {
          executionTypeId,
          originalProductId,
          name,
          productLineId: product.productLine.id,
          slug: getSlugByName(name),
        },
      },
    })

    if (response.data?.createProduct) {
      onClose()
      notification.success({
        message: 'Продукт в новом варианте исполнения успешно создан!',
      })
      history.push(`/products/${response.data?.createProduct.id}`)
    }
  }

  useEffect(() => {
    if (originalProductId) {
      fetchOriginalProduct({
        variables: {
          id: originalProductId,
        },
      })
    }
  }, [originalProductId])

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      okButtonProps={{
        form: 'modalProductExecutionTypeSelect',
        htmlType: 'submit',
      }}
      confirmLoading={createProductRequest.loading}
      title="Добавить вариант исполнения для продукта"
    >
      <UForm id="modalProductExecutionTypeSelect" onFinish={handleSubmit}>
        <UForm.Item label="Вариант исполнения" name="executionTypeId" required>
          <Select loading={originalProductRequest.loading}>
            {executionTypes.map((item) => (
              <Select.Option value={item.id} key={item.id}>
                {item.note} (<UWeight>{item.weight}</UWeight>, <UPrice>{item.price}</UPrice>)
              </Select.Option>
            ))}
          </Select>
        </UForm.Item>
      </UForm>
    </Modal>
  )
}

export default UWAddExecutionTypeProductModal
