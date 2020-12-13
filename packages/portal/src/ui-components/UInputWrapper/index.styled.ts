import { getUBlockWithProps } from '@/ui-components/UBlock'
import styled from 'styled-components'

export const Root = styled(getUBlockWithProps())`
  position: relative;
`

export const ErrorMessage = styled(
  getUBlockWithProps({
    styleConfig: {
      mt: ['-11px'],
      mb: [3],
      fontSize: ['14px'],
    },
  })
)`
  color: ${({ theme }) => theme.colors.red};
`
