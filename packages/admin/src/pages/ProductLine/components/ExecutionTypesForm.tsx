import {
  ProductLineItemPageFragment,
  useCreateExecutionTypeMutation,
  useDeleteExecutionTypeMutation,
  useUpdateExecutionTypeMutation,
} from '@/gql/__generated__/types'
import UBlock from '@/ui-components/UBlock'
import UButton from '@/ui-components/UButton'
import UForm from '@/ui-components/UForm'
import UPopconfirm from '@/ui-components/UPopconfirm'
import UPrice from '@/ui-components/UPrice'
import UTable from '@/ui-components/UTable'
import { IColumn } from '@/ui-components/UTable/types'
import UWeight from '@/ui-components/UWeight'
import { DeleteFilled, EditFilled } from '@ant-design/icons'
import { Card, Input, InputNumber, Modal } from 'antd'
import React, { FunctionComponent, useCallback, useState } from 'react'

interface IExecutionTypesFormProps {
  productLine?: ProductLineItemPageFragment
  tableProps?: Partial<React.ComponentProps<typeof UTable>>
  readOnly?: boolean
}

const getExecutionTypeColumns = ({
  deleteItem,
  onUpdateClick,
  readOnly,
}: {
  deleteItem: (id: string) => void
  onUpdateClick: (id: string) => () => void
  readOnly?: boolean
}): IColumn<ProductLineItemPageFragment['executionTypes'][0]>[] => [
  {
    field: 'note',
    title: 'Название',
  },
  {
    field: 'price',
    title: 'Цена',
    render: (price) => <UPrice>{price}</UPrice>,
  },
  {
    field: 'weight',
    title: 'Вес',
    render: (weight) => <UWeight>{weight}</UWeight>,
  },
  {
    title: '',
    field: 'id',
    key: 'controls',
    width: 100,
    disableSort: true,
    ...(readOnly ? { responsive: [] } : {}),
    render: (id) => (
      <>
        <UButton type="link" onClick={onUpdateClick(id)} size="small">
          <EditFilled />
        </UButton>
        <UPopconfirm
          onConfirm={() => deleteItem(id)}
          title="Все продукты с этим вариантом исполнения будут также УДАЛЕНЫ. Вы уверены?"
          placement="topRight"
        >
          <UButton type="link" danger size="small">
            <DeleteFilled />
          </UButton>
        </UPopconfirm>
      </>
    ),
  },
]

const ExecutionTypesForm: FunctionComponent<IExecutionTypesFormProps> = ({ productLine, tableProps, readOnly }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [updatedExecutionTypeId, setUpdatedExecutionTypeId] = useState<string>()
  const [formFields, setFormFields] = useState({})
  const [createExecutionType] = useCreateExecutionTypeMutation({
    refetchQueries: ['productLineItemPage'],
  })
  const [updateExecutionType] = useUpdateExecutionTypeMutation({
    refetchQueries: ['productLineItemPage'],
  })
  const [deleteExecutionType] = useDeleteExecutionTypeMutation({
    refetchQueries: ['productLineItemPage'],
  })

  const switchModalVisible = useCallback(() => setModalIsVisible((value) => !value), [setModalIsVisible])

  const handleSubmit = useCallback(
    async (values: Record<string, string>) => {
      const data = {
        productLineId: productLine?.id as string,
      }

      Object.keys(values).forEach((field) => {
        if (values[field] !== '') {
          data[field] = values[field]
        }
      })

      if (updatedExecutionTypeId) {
        await updateExecutionType({
          variables: {
            id: updatedExecutionTypeId,
            input: data as any,
          },
        })
        setUpdatedExecutionTypeId(undefined)

        return
      }

      createExecutionType({
        variables: {
          input: data as any,
        },
      })
    },
    [updatedExecutionTypeId, productLine, updateExecutionType, setUpdatedExecutionTypeId, createExecutionType]
  )

  const handleDeleteItem = (id: string) => {
    deleteExecutionType({
      variables: {
        id,
      },
    })
  }

  const handleCreateClick = () => {
    setUpdatedExecutionTypeId(undefined)
    setFormFields({
      note: '',
      price: '',
      weight: '',
    })
    switchModalVisible()
  }

  const handleUpdateClick: Parameters<typeof getExecutionTypeColumns>[0]['onUpdateClick'] = (id) => () => {
    setUpdatedExecutionTypeId(id)
    const executionType = productLine?.executionTypes.find((item) => item.id === id) || {}
    setFormFields(executionType)
    switchModalVisible()
  }

  const executionTypeColumns = getExecutionTypeColumns({
    deleteItem: handleDeleteItem,
    onUpdateClick: handleUpdateClick,
    readOnly,
  })

  const fields = Object.keys(formFields).map((field) => ({
    name: field,
    value: formFields[field],
  }))

  return (
    <Card
      title="Варианты исполнения"
      size={readOnly ? 'default' : 'small'}
      extra={
        !readOnly && (
          <UButton onClick={handleCreateClick} type="primary" size="small">
            Добавить
          </UButton>
        )
      }
    >
      <Modal
        visible={modalIsVisible}
        onCancel={switchModalVisible}
        cancelText="Отмена"
        okText="Создать"
        okButtonProps={{
          htmlType: 'submit',
          form: 'executionTypeModalForm',
        }}
      >
        <UForm id="executionTypeModalForm" labelCol={{ span: 6, sm: 6, md: 5 }} onFinish={handleSubmit} fields={fields}>
          <UBlock pt={6}>
            <UForm.Item label="Примечание" name="note" required initialValue="">
              <Input />
            </UForm.Item>
            <UForm.Item label="Вес (г)" name="weight" required initialValue="">
              <InputNumber min={0} />
            </UForm.Item>
            <UForm.Item label="Цена (₽)" name="price" required initialValue="">
              <InputNumber min={0} />
            </UForm.Item>
          </UBlock>
        </UForm>
      </Modal>

      <UTable<any> dataSource={productLine?.executionTypes || []} columns={executionTypeColumns} {...tableProps} />
    </Card>
  )
}

export default ExecutionTypesForm
