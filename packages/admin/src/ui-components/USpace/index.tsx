import * as React from 'react'
import { SpaceProps } from 'antd/lib/space'
import cn from 'classnames'
import styled from 'styled-components'

interface IUSpaceProps extends Pick<SpaceProps, 'size' | 'direction'> {}

const Root = styled.div`
  &.isVertical {
    > * + * {
      margin-top: 5px !important;

      &.isMiddle {
        margin-top: 10px !important;
      }

      &.isLarge {
        margin-top: 15px !important;
      }
    }
  }
  &.isHorizontal {
    > * + * {
      margin-left: 5px !important;

      &.isMiddle {
        margin-left: 10px !important;
      }

      &.isLarge {
        margin-left: 15px !important;
      }
    }
  }
`

const USpace: React.FunctionComponent<IUSpaceProps> = ({ direction, size, children }) => {
  return (
    <Root
      className={cn(
        direction === 'vertical' && 'isVertical',
        size === 'middle' && 'isMiddle',
        size === 'large' && 'isLarge'
      )}
    >
      {children}
    </Root>
  )
}

export default USpace
