import React, { HTMLProps } from 'react'
import { Controller } from 'react-hook-form'
import UInputWrapper from '../UInputWrapper'
import { Root } from './index.styled'
import { IUInputProps } from './types'

const UInput: React.FunctionComponent<IUInputProps> = ({
  className,
  placeholder,
  name,
  control,
  type: _type = 'text',
  required = false,
  noAutocomplete = false,
  numberKeyboard = false,
  pattern: _pattern,
  mask = '',
  maskChar = '_',
  error,
  errors = {},
}) => {
  let inputMode: HTMLProps<HTMLInputElement>['inputMode'] = undefined
  let type = _type
  let pattern = _pattern
  const errorMessage = error || errors[name]?.message

  if (type === 'number' || numberKeyboard) {
    inputMode = 'numeric'
    type = 'text'
    pattern = '[0-9]'
  }

  if (type === 'tel') {
    inputMode = 'tel'
  }

  if (!control) {
    return (
      <UInputWrapper error={errorMessage}>
        <Root
          name={name}
          type={type}
          className={className}
          placeholder={placeholder}
          required={required}
          autoComplete={noAutocomplete ? 'off' : ''}
          pattern={pattern}
          inputMode={inputMode}
          mask={mask}
          maskChar={maskChar}
          error={errorMessage}
        />
      </UInputWrapper>
    )
  }

  return (
    <Controller
      render={({ ref, ...props }: any) => {
        return (
          <UInputWrapper error={errorMessage}>
            <Root
              {...props}
              type={type}
              className={className}
              placeholder={placeholder}
              required={required}
              inputRef={ref}
              autoComplete={noAutocomplete ? 'off' : ''}
              pattern={pattern}
              inputMode={inputMode}
              mask={mask}
              maskChar={maskChar}
              error={errorMessage}
            />
          </UInputWrapper>
        )
      }}
      name={name}
      control={control}
      rules={{
        required,
      }}
      defaultValue=""
    />
  )
}

export default UInput
