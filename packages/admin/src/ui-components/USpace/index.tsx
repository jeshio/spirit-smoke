import * as React from 'react'
import { SpaceProps } from 'antd/lib/space'
import cn from 'classnames'
import styles from './styles.less'

interface IUSpaceProps extends Pick<SpaceProps, 'size' | 'direction'> {}

const USpace: React.FunctionComponent<IUSpaceProps> = ({ direction, size, children }) => {
  return (
    <div
      className={cn(
        styles.root,
        direction === 'vertical' && styles.isVertical,
        size === 'middle' && styles.isMiddle,
        size === 'large' && styles.isLarge
      )}
    >
      {children}
    </div>
  )
}

export default USpace
