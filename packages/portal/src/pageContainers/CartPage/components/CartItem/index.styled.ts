import theme from '@/styles/theme'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import styled from 'styled-components'

export const StyledCartItem = styled(
  getUBlockWithProps({
    styleConfig: {
      p: [3],
      px: [4],
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
      fontSize: ['16px'],
      m: 0,
      height: ['38px'],
    },
  })
)``

export const CompanyName = styled(
  getUBlockWithProps({
    styleConfig: {
      fontSize: ['12px'],
      m: [0],
      mb: [1],
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
      right: [4],
      top: [3],
      width: ['10px'],
      height: ['10px'],
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
