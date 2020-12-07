import * as React from 'react'
import { Root } from './index.styled'

interface IUParagraphProps extends React.HTMLProps<HTMLParagraphElement> {}

const UParagraph: React.FunctionComponent<IUParagraphProps> = (props) => {
  return <Root {...props} />
}

export default UParagraph
