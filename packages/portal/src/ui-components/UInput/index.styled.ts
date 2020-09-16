import styled from 'styled-components'
import { getUBlockWithProps } from '../UBlock'

export const Root = styled(
  getUBlockWithProps({
    tag: 'input',
  })
)`
  border: none;
  outline: none;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fonts.primary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholderColor};
  }
`
