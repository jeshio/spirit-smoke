import { useFeatureMinimumListQuery } from '@/gql/__generated__/types'
import React, { useEffect, useMemo } from 'react'
import { Root, Item, ItemTitle, ItemImage, RootWrapper } from './index.styled'

interface ICFeaturesSelectorProps {
  setVisible: (isVisible: boolean) => void
}

const CFeaturesSelector: React.FunctionComponent<ICFeaturesSelectorProps> = ({ setVisible }) => {
  const featuresRequest = useFeatureMinimumListQuery()
  const items = useMemo(
    () =>
      featuresRequest.data?.features
        .filter((feature) => !feature.isDisabled)
        .map((feature) => (
          <Item key={feature.id}>
            <ItemImage src={feature.imageUrl} />
            <ItemTitle>{feature.name}</ItemTitle>
          </Item>
        )) || [],
    [featuresRequest.data]
  )

  useEffect(() => {
    setVisible(items.length > 1)
  }, [items])

  if (items.length < 2) return null

  return (
    <RootWrapper>
      <Root itemsCount={items.length}>{items}</Root>
    </RootWrapper>
  )
}

export default CFeaturesSelector
