import { FeatureSimple } from '@/gql/__generated__/types'
import * as React from 'react'
import { Image, Root } from './index.styled'
import { IFeatureItemProps } from './types'

const FeatureItem: React.FunctionComponent<IFeatureItemProps> = ({ feature }) => {
  return (
    <Root>
      <Image url={feature.imageUrl} />
    </Root>
  )
}

export default FeatureItem
