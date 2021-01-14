import theme from '@/styles/theme'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import styled from 'styled-components'

export const StyledCartItem = styled(
  getUBlockWithProps({
    styleConfig: {
      p: [3, 5],
      px: [4, 6],
      borderRadius: theme.card.borderRadius,
    },
  })
)`
  position: relative;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.card.boxShadow};
`

export const Title = styled(
  getUBlockWithProps({
    tag: 'h4',
    styleConfig: {
      fontSize: [16, 21],
      m: 0,
      height: [38, 48],
    },
  })
)``

export const CompanyName = styled(
  getUBlockWithProps({
    styleConfig: {
      fontSize: [12, 15],
      m: [0],
      mb: [1, 2],
    },
  })
)``

export const Footer = styled(getUBlockWithProps())`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DeleteButton = styled(
  getUBlockWithProps({
    tag: 'button',
    styleConfig: {
      p: 0,
      right: [4, 6],
      top: [3, 5],
      width: [10, 14],
      height: [10, 14],
    },
  })
)`
  position: absolute;
  background: none;
  border: unset;
  outline: unset;

  svg {
    fill: ${({ theme }) => theme.colors.placeholderColor};
    width: 100%;
    height: 100%;
  }
`
