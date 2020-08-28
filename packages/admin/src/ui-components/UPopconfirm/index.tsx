import * as React from 'react'
import { Popconfirm } from 'antd'
import { PopconfirmProps } from 'antd/lib/popconfirm'

interface IUPopconfirmProps extends Partial<PopconfirmProps> {
  onConfirm: PopconfirmProps['onConfirm']
}

const UPopconfirm: React.FunctionComponent<IUPopconfirmProps> = (props) => {
  return <Popconfirm title="Точно нужно удалить?" okText="Да" cancelText="Нет" {...props} />
}

export default UPopconfirm
