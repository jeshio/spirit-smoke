import { getUBlockWithProps } from '@/ui-components/UBlock'
import USlider from '@/ui-components/USlider'
import styled from 'styled-components'

export const ProductsSlider = styled(
  getUBlockWithProps({
    tag: USlider,
    styleConfig: {
      px: [3],
      paddingBottom: ['28px'],
    },
  })
)``
