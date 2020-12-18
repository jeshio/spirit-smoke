import * as React from 'react'

interface IUPriceProps {}

const UPrice: React.FunctionComponent<IUPriceProps> = ({ children }) => {
  return <span>{children} ₽</span>
}

export default UPrice
