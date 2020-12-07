import IWithClassName from '@/types/props/IWithClassName'
import * as React from 'react'
import styled from 'styled-components'
import { Root } from './index.styled'

interface IUPriceProps extends IWithClassName {
  children: number
}

const UPrice: React.FunctionComponent<IUPriceProps> = ({ children, className }) => (
  <Root className={className}>{children} ₽</Root>
)

export default styled(UPrice)``
