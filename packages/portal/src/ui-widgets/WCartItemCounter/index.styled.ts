import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import styled, { css } from 'styled-components'

export const CartItemCountWrapper = styled(
  getUBlockWithProps({
    styleConfig: {
      width: [98, 101],
      height: [32, 35],
    },
  })
)`
  position: relative;
`

export const CartItemCount = styled(
  getUBlockWithProps({
    styleConfig: {
      width: '100%',
      height: '100%',
    },
  })
)(
  ({ theme }) => css`
    position: absolute;
    border: 1px solid ${theme.colors.black};
    border-radius: 100px;
    text-align: center;
    right: 0;
  `
)

export const CartItemCountValue = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit('div', ['isChanged']),
    styleConfig: {
      fontSize: [16, 17],
      pt: ['5px', '6px'],
      mt: ['-1px'],
    },
  })
)<{
  isChanged: boolean
}>(
  ({ isChanged }) => css`
    transform: scale(${isChanged ? 1.15 : 1});
    transition: transform 0.08s;
    transform-origin: bottom;
    font-weight: 600;
  `
)

export const CountChangeButton = styled(
  getUBlockWithProps({
    tag: 'button',
    styleConfig: {
      width: ['45%'],
      height: ['100%'],
    },
  })
)`
  position: absolute;
  border: unset;
  outline: unset;
  background: unset;
  color: ${({ theme }) => theme.colors.black};
  top: 0;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
`

export const DecrementButton = styled(CountChangeButton)`
  left: 0;
  font-size: 16px;
`

export const IncrementButton = styled(CountChangeButton)`
  right: 0;
  font-size: 23px;
`
