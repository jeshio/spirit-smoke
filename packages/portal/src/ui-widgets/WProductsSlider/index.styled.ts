import { getUBlockWithProps } from '@/ui-components/UBlock'
import USlider from '@/ui-components/USlider'
import styled from 'styled-components'

export const Root = styled(
  getUBlockWithProps({
    tag: USlider,
    styleConfig: {
      px: ['14px'],
      paddingBottom: ['28px'],
    },
  })
)``
