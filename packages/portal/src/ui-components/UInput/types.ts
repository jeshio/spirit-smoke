import { UseFormMethods } from 'react-hook-form'

export interface IUInputProps {
  className?: string
  placeholder?: string
  name: string
  control?: UseFormMethods['control']
  type?: 'text' | 'number' | 'password' | 'tel'
  required?: boolean
  noAutocomplete?: boolean
  numberKeyboard?: boolean
  pattern?: string
  mask?: string
  maskChar?: string
  error?: string
  errors?: {
    [key: string]: {
      message: string
    }
  }
}
