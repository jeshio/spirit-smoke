import { getUBlockWithProps } from '@/ui-components/UBlock'
import styled from 'styled-components'

export const Root = styled(
  getUBlockWithProps({
    styleConfig: {
      fontSize: [18, 20],
    },
  })
)`
  font-weight: 500;
`
