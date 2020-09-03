import * as React from 'react'
import { FormItemProps } from 'antd/lib/form/FormItem'
import { ColProps } from 'antd/lib/col'
import { Form } from 'antd'

import styled from 'styled-components'

interface IUFormItemProps extends FormItemProps {}

const Root = styled(Form.Item)`
  > button,
  > a {
    margin-top: 4px;
    margin-bottom: 4px;
  }
  > button + button,
  > button + a,
  > a + button,
  > a + a {
    margin-left: 16px;
  }
`

const UFormItem: React.FunctionComponent<IUFormItemProps> = (props) => {
  const withLabel = !!props.label
  const rules = props.rules || []
  let wrapperColDefault: ColProps = {}

  if (!withLabel && !props.colon) {
    wrapperColDefault = { sm: { offset: 5 }, md: { offset: 7 }, lg: { offset: 6 }, xl: { offset: 5 } }
  }

  if (props.required) {
    const hasRequiredRule = rules.find((rule) => (typeof rule === 'object' ? rule.required : false))

    if (!hasRequiredRule) {
      rules.push({
        required: true,
      })
    }
  }

  return <Root wrapperCol={wrapperColDefault} {...props} rules={rules} />
}

export default UFormItem
