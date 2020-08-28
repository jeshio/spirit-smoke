import * as React from 'react'
import { PageContainer } from '@ant-design/pro-layout'
import UContainerWithPageTitle from '../UContainerWithPageTitle'

interface IUPageContainerProps extends React.ComponentProps<typeof PageContainer> {
  pageTitle?: string
}

const UPageContainer: React.FunctionComponent<IUPageContainerProps> = (props) => {
  const pageTitle = props.pageTitle || (typeof props.title === 'string' && props.title) || undefined
  return (
    <PageContainer {...props}>
      <UContainerWithPageTitle title={pageTitle}>{props.children}</UContainerWithPageTitle>
    </PageContainer>
  )
}

export default UPageContainer
