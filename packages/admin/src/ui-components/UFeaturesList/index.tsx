import * as React from 'react'
import { FeatureSimpleFragment } from '@/gql/__generated__/types'
import { Popover } from 'antd'
import { Link } from 'umi'
import * as styled from './styled.index'

interface IUFeaturesListProps {
  features: Partial<FeatureSimpleFragment>[]
  isMini?: boolean
}

const UFeaturesList: React.FunctionComponent<IUFeaturesListProps> = ({ features, isMini = false }) => {
  const items = React.useMemo(
    () =>
      features.map((feature) => (
        <styled.Item isMini={isMini} key={feature.id}>
          <Popover
            title={feature.name}
            content={
              <Link to={`/features/${feature.id || ''}`} target="_blank">
                Подробнее
              </Link>
            }
          >
            <styled.Image
              isMini={isMini}
              isDisabled={feature.isDisabled}
              style={{
                backgroundImage: `url(${feature.imageUrl || ''})`,
              }}
            />
          </Popover>
        </styled.Item>
      )),
    [features, isMini]
  )
  return (
    <styled.Root>
      {items}
      {items.length === 0 && <div>Без особенностей</div>}
    </styled.Root>
  )
}

export default UFeaturesList
