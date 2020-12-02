import * as React from 'react'
import { Root } from './index.styled'

interface IUPriceProps {
  children: number
}

const UPrice: React.FunctionComponent<IUPriceProps> = ({ children }) => <Root>{children} ₽</Root>

export default UPrice
