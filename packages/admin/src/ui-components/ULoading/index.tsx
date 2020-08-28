import * as React from 'react'
import { PageLoading } from '@ant-design/pro-layout'

interface IULoadingProps {
  tip?: string
}

const ULoading: React.FunctionComponent<IULoadingProps> = (props) => {
  return <PageLoading tip={props.tip} />
}

export default ULoading
