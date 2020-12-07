import styled from 'styled-components'
import { getUBlockWithProps } from '../UBlock'

export const Root = styled(
  getUBlockWithProps({
    tag: 'input',
    styleConfig: {
      px: [3],
      py: [2],
      fontSize: ['14px'],
      width: ['100%'],
      mb: [3],
    },
  })
)`
  border: none;
  outline: none;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fonts.primary};
  box-shadow: 3px 3px 15px rgba(218, 220, 228, 0.3);
  letter-spacing: 0.03em;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholderColor};
  }
`
