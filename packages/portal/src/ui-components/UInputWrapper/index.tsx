import * as React from 'react'
import { ErrorMessage, Root } from './index.styled'

interface IUInputWrapperProps {
  error?: string
}

const UInputWrapper: React.FunctionComponent<IUInputWrapperProps> = ({ children, error }) => {
  return (
    <Root>
      {children}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Root>
  )
}

export default UInputWrapper
