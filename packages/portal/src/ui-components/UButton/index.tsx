import * as React from 'react'
import { StyledButton } from './index.styled'
import { IUButtonProps } from './types'

const UButton: React.FunctionComponent<IUButtonProps> = ({ isSubmit, type, ...props }) => {
  let child = props.children

  if (props.icon) {
    child = (
      <>
        {props.icon}
        {child}
      </>
    )
  }

  return (
    <StyledButton {...props} colorType={type} type={isSubmit ? 'submit' : 'button'}>
      {child}
    </StyledButton>
  )
}

UButton.defaultProps = {
  type: 'primary',
}

export default UButton
