import theme from '@/styles/theme'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import USlider from '@/ui-components/USlider'
import styled from 'styled-components'

export const ProductsSlider = styled(
  getUBlockWithProps({
    tag: USlider,
    styleConfig: {
      px: [3, 5],
      mt: theme.blocksSpace.map((n) => n - 1),
      pb: ['100px', '120px'],
      mb: ['-100px', '-120px'],
    },
  })
)`
  &::-webkit-scrollbar {
    display: none;
  }
`
