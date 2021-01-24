import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import theme from '@/styles/theme'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import UButton from '@/ui-components/UButton'
import UContent from '@/ui-components/UContent'
import USlider from '@/ui-components/USlider'
import { darken } from 'polished'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'

export const RootWrapper = styled(
  getUBlockWithProps({
    tag: UContent,
    styleConfig: {
      mt: theme.blocksSpace.map((n) => n - 1),
      px: [0],
    },
  })
)``

export const Root = styled(
  getUBlockWithProps({
    tag: USlider,
  })
)``

export const ItemsPair = styled(getUBlockWithProps())`
  > * {
    &:first-child {
      ${({ theme }) => space({ mb: [2], theme })};
    }
  }
`

export const Item = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit(UButton, ['isActive']),
    styleConfig: {
      height: [46, 54],
      width: [46, 54],
      minWidth: [46, 54],
      fontSize: [9, 10],
    },
  })
)<{
  isActive?: boolean
}>`
  border-radius: 50%;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.inactive.background};
  color: ${({ theme }) => theme.colors.inactive.color};
  position: relative;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  padding: 0 0 3px 0;
  border: unset;

  &:active,
  &:hover {
    color: ${({ theme }) => theme.colors.inactive.color};
  }

  &:focus {
    color: ${({ theme }) => darken(0.3, theme.colors.inactive.color)};
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-color: ${theme.colors.primaryColor};
      color: #fff;

      &:active,
      &:hover {
        color: #fff;
      }

      &:focus {
        color: #ddd;
      }
    `}
`

export const ItemImage = styled(
  getUBlockWithProps({
    tag: 'img',
    styleConfig: {
      height: [16],
      width: [16],
      top: ['7px'],
      ml: ['-8px'],
    },
  })
)`
  position: absolute;
  left: 50%;
`

export const ItemTitle = styled(
  getUBlockWithProps({
    styleConfig: {
      bottom: ['10px'],
    },
  })
)`
  position: absolute;
  width: 100%;
  text-align: center;
`
