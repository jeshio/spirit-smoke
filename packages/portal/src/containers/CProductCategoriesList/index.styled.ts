import styled from 'styled-components'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import ULink from '@/ui-components/ULink'

export const Item = styled(
  getUBlockWithProps({
    px: [2],
    py: [1],
    tag: ULink,
  })
)``
