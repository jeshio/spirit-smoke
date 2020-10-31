import theme from '@/styles/theme'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import USlider from '@/ui-components/USlider'
import styled from 'styled-components'

export const ProductsSlider = styled(
  getUBlockWithProps({
    tag: USlider,
    styleConfig: {
      px: [3],
      mt: theme.blocksSpace,
      pb: [`100px`],
      mb: ['-100px'],
    },
  })
)`
  &::-webkit-scrollbar {
    display: none;
  }
`
