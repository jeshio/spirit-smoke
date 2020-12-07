import { getUBlockWithProps } from '@/ui-components/UBlock'
import UBottomBar from '@/ui-components/UBottomBar'
import UPrice from '@/ui-components/UPrice'
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

export const Text = styled(getUBlockWithProps())`
  display: flex;
  align-items: center;

  ${UPrice} {
    margin-left: 7px;
  }
`
