import React, { forwardRef, ForwardRefExoticComponent, useMemo, PropsWithoutRef, RefAttributes } from 'react'
import { Form } from 'antd'
import { FormInstance, FormProps } from 'antd/lib/form'
import UFormItem from '../UFormItem'
import validateMessages from './validateMessages'

interface IUFormProps extends FormProps {}

const UForm = forwardRef<FormInstance, IUFormProps>((props, ref) => {
  const allValidateMessages = useMemo(
    () => ({
      ...validateMessages,
      ...props.validateMessages,
    }),
    [props.validateMessages]
  )
  return <Form size="large" ref={ref} validateMessages={allValidateMessages} {...props} />
}) as ForwardRefExoticComponent<PropsWithoutRef<IUFormProps> & RefAttributes<FormInstance>> & {
  Item: React.ComponentType<React.ComponentProps<typeof UFormItem>>
}

UForm.Item = UFormItem

export default UForm
