import { getUBlockWithProps } from '@/ui-components/UBlock'
import styled from 'styled-components'

export const Root = styled(
  getUBlockWithProps({
    tag: 'p',
    styleConfig: {
      mt: [0],
      mb: [3],
      fontSize: ['16px'],
    },
  })
)`
  color: ${({ theme }) => theme.colors.placeholderColor};
  font-weight: 500;
  letter-spacing: 0.01em;
`
