import * as React from 'react'

interface IUWeightProps {}

const UWeight: React.FunctionComponent<IUWeightProps> = ({ children }) => {
  return <span>{children} гр.</span>
}

export default UWeight
