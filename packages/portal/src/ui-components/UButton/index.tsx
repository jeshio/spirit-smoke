import * as React from 'react'
import { StyledButton } from './index.styled'
import { IUButtonProps } from './types'

const UButton: React.FunctionComponent<IUButtonProps> = (props) => {
  let child = props.children

  if (props.icon) {
    child = props.icon
  }

  return <StyledButton {...props}>{child}</StyledButton>
}

UButton.defaultProps = {
  type: 'primary',
}

export default UButton
