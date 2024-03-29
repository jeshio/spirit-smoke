import * as React from 'react'
import { Col } from 'antd'
import { ColProps } from 'antd/lib/col'

interface IUColProps extends ColProps {
  fullRow?: boolean
}

const UCol: React.FunctionComponent<IUColProps> = (props) => {
  return <Col span={24} {...props} />
}

export default UCol
