import { getUBlockWithProps } from '@/ui-components/UBlock'
import styled from 'styled-components'

export const Root = styled(
  getUBlockWithProps({
    tag: 'p',
    styleConfig: {
      mt: [0],
      mb: [3],
      fontSize: [16, 18],
    },
  })
)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 400;
  letter-spacing: 0.01em;
`
