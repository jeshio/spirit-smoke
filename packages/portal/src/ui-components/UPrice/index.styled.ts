import { getUBlockWithProps } from '@/ui-components/UBlock'
import styled from 'styled-components'

export const Root = styled(
  getUBlockWithProps({
    styleConfig: {
      fontSize: ['18px'],
    },
  })
)`
  font-weight: 600;
`
