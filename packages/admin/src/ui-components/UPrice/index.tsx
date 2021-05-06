import * as React from 'react'

interface IUPriceProps {
  children?: number
}

const UPrice: React.FunctionComponent<IUPriceProps> = ({ children = 0 }) => {
  return <span>{children.toLocaleString()} ₽</span>
}

export default UPrice
