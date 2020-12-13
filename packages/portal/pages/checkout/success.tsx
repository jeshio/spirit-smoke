import * as React from 'react'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import styled from 'styled-components'
import UTitle from '@/ui-components/UTitle'
import UContent from '@/ui-components/UContent'

interface ICheckoutSuccessProps {}

export const Root = styled(
  getUBlockWithProps({
    tag: UContent,
    styleConfig: {
      mt: ['120px'],
    },
  })
)`
  text-align: center;
`

const CheckoutSuccess: React.FunctionComponent<ICheckoutSuccessProps> = () => {
  return (
    <Root>
      <UTitle level={2}>Вы успешно совершили заказ! Вам позвонят перед выездом!</UTitle>
    </Root>
  )
}

export default CheckoutSuccess
