import * as React from 'react'

interface IUWeightProps {
  children?: number | null
}

const UWeight: React.FunctionComponent<IUWeightProps> = ({ children }) => {
  return <span>{children?.toLocaleString() || '?'} гр.</span>
}

export default UWeight
