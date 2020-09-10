import * as React from 'react'
import { List, Item } from './styled.index'
import { IUListProps } from './types'

const UList: React.FunctionComponent<IUListProps> = ({ items, isHorizontal, className, itemClassName }) => {
  const itemsJsx = React.useMemo(
    () =>
      items.map((item, index) => (
        <Item key={index} className={itemClassName}>
          {item}
        </Item>
      )),
    [items]
  )
  return (
    <List className={className} isHorizontal={isHorizontal}>
      {itemsJsx}
    </List>
  )
}

export default UList
