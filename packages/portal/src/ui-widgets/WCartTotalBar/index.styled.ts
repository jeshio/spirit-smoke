import { getUBlockWithProps } from '@/ui-components/UBlock'
import UBottomBar from '@/ui-components/UBottomBar'
import styled from 'styled-components'

export const Root = styled(
  getUBlockWithProps({
    tag: UBottomBar,
    styleConfig: {
      px: [4],
    },
  })
)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
