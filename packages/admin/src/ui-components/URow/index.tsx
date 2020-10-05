import * as React from 'react'
import { Row } from 'antd'
import { RowProps } from 'antd/lib/row'

interface IURowProps extends RowProps {}

const URow: React.FunctionComponent<IURowProps> = (props) => {
  return (
    <Row
      style={{
        marginLeft: '0',
        marginRight: '0',
        marginTop: '0',
        marginBottom: '0',
      }}
      gutter={{
        xs: 4,
        sm: 8,
        md: 12,
        xl: 18,
      }}
      {...props}
    />
  )
}

export default URow
