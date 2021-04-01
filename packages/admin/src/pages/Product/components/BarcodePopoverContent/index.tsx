import { useSetProductBarcodeMutation } from '@/gql/__generated__/types'
import UForm from '@/ui-components/UForm'
import { Form, Input } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect, useRef } from 'react'

interface IBarcodePopoverContentProps {
  productId: string
  isVisible: boolean
  switchVisible: () => void
  setProductBarcode: ReturnType<typeof useSetProductBarcodeMutation>[0]
}

const BarcodePopoverContent: React.FunctionComponent<IBarcodePopoverContentProps> = ({
  isVisible,
  switchVisible,
  setProductBarcode,
  productId,
}) => {
  const inputRef = useRef<Input>(null)
  const formRef = useRef<FormInstance>(null)
  const handleSubmit = (fields: any) => {
    switchVisible()
    setProductBarcode({
      variables: {
        id: productId,
        barcode: fields.barcode,
      },
    })
  }
  const handleSearch = () => formRef.current?.submit()

  useEffect(() => {
    let timer: any

    if (isVisible) {
      timer = setTimeout(() => inputRef.current?.focus(), 100)
    }

    return () => clearTimeout(timer)
  }, [isVisible])

  return (
    <UForm onFinish={handleSubmit} ref={formRef}>
      <Form.Item name="barcode" noStyle>
        <Input.Search
          ref={inputRef}
          placeholder="Отсканируйте штрих-код"
          enterButton="Ввод"
          size="small"
          style={{ width: '250px' }}
          onSearch={handleSearch}
        />
      </Form.Item>
    </UForm>
  )
}

export default BarcodePopoverContent
