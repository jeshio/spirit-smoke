import * as React from 'react'
import { Descriptions } from 'antd'
import { DescriptionsProps } from 'antd/lib/descriptions'

interface IUDescriptionsProps extends DescriptionsProps {}

const UDescriptions: React.FunctionComponent<IUDescriptionsProps> & {
  Item: React.ComponentType<React.ComponentProps<typeof Descriptions.Item>>
} = (props) => {
  return (
    <Descriptions
      bordered
      size="small"
      column={{ xxl: 5, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
      layout="vertical"
      {...props}
    />
  )
}

UDescriptions.Item = Descriptions.Item

export default UDescriptions
