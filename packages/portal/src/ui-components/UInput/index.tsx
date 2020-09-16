import * as React from 'react'
import { Root } from './index.styled'

interface IUInputProps {
  className?: string
  placeholder?: string
}

const UInput: React.FunctionComponent<IUInputProps> = ({ className, placeholder }) => {
  return (
    <Root
      className={className}
      tagComponentProps={{
        placeholder,
      }}
    />
  )
}

export default UInput
