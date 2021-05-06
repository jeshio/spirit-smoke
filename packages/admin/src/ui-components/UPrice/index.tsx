import * as React from 'react'

interface IUPriceProps {
  children: number
}

const UPrice: React.FunctionComponent<IUPriceProps> = ({ children }) => {
  return <span>{children.toLocaleString()} ₽</span>
}

export default UPrice
