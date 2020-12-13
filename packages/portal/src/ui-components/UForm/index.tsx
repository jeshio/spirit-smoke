import React, { HTMLProps } from 'react'

interface IUFormProps extends HTMLProps<HTMLFormElement> {}

const UForm: React.FunctionComponent<IUFormProps> = (props) => {
  return <form {...props} noValidate />
}

export default UForm
