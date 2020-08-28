import * as React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'

interface IUPageHeaderProps extends React.ComponentProps<typeof PageHeaderWrapper> {}

const UPageHeader: React.FunctionComponent<IUPageHeaderProps> = (props) => {
  return <PageHeaderWrapper {...props}>{props.children}</PageHeaderWrapper>
}

export default UPageHeader
