import { getUBlockWithProps } from '@/ui-components/UBlock'
import UContent from '@/ui-components/UContent'
import UPrice from '@/ui-components/UPrice'
import styled from 'styled-components'

export const Root = styled(
  getUBlockWithProps({
    tag: UContent,
    styleConfig: {
      height: '100%',
    },
  })
)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled(
  getUBlockWithProps({
    styleConfig: {
      fontSize: [16, 18],
    },
  })
)`
  display: flex;
  align-items: center;

  ${UPrice} {
    margin-left: 7px;
  }
`
