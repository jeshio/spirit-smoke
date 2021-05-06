import * as React from 'react'

interface IUWeightProps {
  children: number
}

const UWeight: React.FunctionComponent<IUWeightProps> = ({ children = 0 }) => {
  return <span>{children.toLocaleString()} гр.</span>
}

export default UWeight
