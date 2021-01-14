import { getUBlockWithProps } from '@/ui-components/UBlock'
import styled from 'styled-components'

export const Root = styled(getUBlockWithProps())`
  position: relative;
`

export const ErrorMessage = styled(
  getUBlockWithProps({
    styleConfig: {
      mt: [-11],
      mb: [3, 5],
      fontSize: [14, 16],
    },
  })
)`
  color: ${({ theme }) => theme.colors.red};
`
