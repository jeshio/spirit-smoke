import USlider from '@/ui-components/USlider'
import * as React from 'react'
import { Root } from './index.styled'

interface IWProductsSliderProps extends React.ComponentProps<typeof USlider> {}

const WProductsSlider: React.FunctionComponent<IWProductsSliderProps> = (props) => {
  return <Root {...props} />
}

export default WProductsSlider
