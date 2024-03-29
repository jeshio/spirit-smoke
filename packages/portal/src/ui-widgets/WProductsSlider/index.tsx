import USlider from '@/ui-components/USlider'
import * as React from 'react'
import { ProductsSlider } from './index.styled'

interface IWProductsSliderProps extends React.ComponentProps<typeof USlider> {}

const WProductsSlider: React.FunctionComponent<IWProductsSliderProps> = (props) => {
  return <ProductsSlider {...props} slidesToScroll={[1, 1, 2]} />
}

export default WProductsSlider
