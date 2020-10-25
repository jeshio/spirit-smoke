import * as React from 'react'
import { Slider, StyledItem } from './index.styled'
import { IUSlider } from './types'

const USlider: IUSlider = ({ children: _children, items = [], ...props }) => {
  const children = React.useMemo(
    () => _children || items.map((child, index) => <StyledItem key={index}>{child}</StyledItem>),
    [_children, items]
  )

  return <Slider {...props}>{children}</Slider>
}

USlider.Item = StyledItem

export default USlider
