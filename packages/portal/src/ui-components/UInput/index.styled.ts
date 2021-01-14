import styled from 'styled-components'
import InputMask from 'react-input-mask'
import { getUBlockWithProps } from '../UBlock'
import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import { IUInputProps } from './types'

export const Root = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit<IUInputProps>(InputMask, ['error']),
    styleConfig: {
      px: [3, 4],
      py: [2, 3],
      fontSize: [14, 16],
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
  border: 1px solid transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholderColor};
  }

  ${({ theme, error }) =>
    error &&
    `
    border-color: ${theme.colors.red};
  `}
`
