import React from 'react'
import { Root } from './index.styled'

interface ICMainProps {}

const CMain: React.FunctionComponent<ICMainProps> = (props) => {
  return <Root {...props} />
}

export default CMain
