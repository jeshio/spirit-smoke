import theme from '@/styles/theme'
import * as React from 'react'
import Slider from 'react-slick'
import { Root, StyledItem } from './index.styled'
import { IUSlider } from './types'

const USlider: IUSlider = ({ children: _children, items = [], slidesToScroll = [1], ...props }) => {
  const children = React.useMemo(
    () => _children || items.map((child, index) => <StyledItem key={index}>{child}</StyledItem>),
    [_children, items]
  )
  const responsive = theme.breakpoints.map((breakpoint, index) => ({
    breakpoint: Number.parseInt(`${breakpoint as string}`) - 1,
    settings: {
      slidesToScroll:
        (slidesToScroll[index] !== undefined && slidesToScroll[index]) || slidesToScroll[slidesToScroll.length - 1],
    },
  }))

  return (
    <Root {...props}>
      <Slider
        variableWidth
        swipeToSlide
        arrows
        infinite={false}
        responsive={responsive}
        slidesToScroll={slidesToScroll[slidesToScroll.length - 1]}
      >
        {children}
      </Slider>
    </Root>
  )
}

USlider.Item = StyledItem

export default USlider
