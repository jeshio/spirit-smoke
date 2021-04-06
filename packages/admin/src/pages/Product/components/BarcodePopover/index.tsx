import { useSetProductBarcodeMutation } from '@/gql/__generated__/types'
import UButton from '@/ui-components/UButton'
import { Popover } from 'antd'
import React, { useState } from 'react'
import BarcodePopoverContent from '../BarcodePopoverContent'

interface IBarcodePopoverProps {
  productId: string
  setProductBarcode: ReturnType<typeof useSetProductBarcodeMutation>[0]
}

const BarcodePopover: React.FunctionComponent<IBarcodePopoverProps> = ({ setProductBarcode, productId }) => {
  const [isVisible, setIsVisible] = useState(false)
  const switchVisible = () => setIsVisible((currentValue) => !currentValue)

  return (
    <Popover
      content={
        <BarcodePopoverContent
          setProductBarcode={setProductBarcode}
          switchVisible={switchVisible}
          isVisible={isVisible}
          productId={productId}
        />
      }
      title="Установить штрих-код"
      trigger="click"
      visible={isVisible}
      onVisibleChange={setIsVisible}
    >
      <UButton>Добавить</UButton>
    </Popover>
  )
}

export default BarcodePopover
