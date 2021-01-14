import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import theme from '@/styles/theme'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import UButton from '@/ui-components/UButton'
import { darken } from 'polished'
import styled, { css } from 'styled-components'
import { left, space, layout } from 'styled-system'

const list = { padding: [theme.space[3], theme.space[5]] }
const item = { width: [46, 54], height: [46, 54], margin: [theme.space[2], theme.space[3]] }

const getRootWidth = (itemsCount: number, responsiveLevel: number) =>
  `${
    Math.floor(((itemsCount + 1) * (item.width[responsiveLevel] + item.margin[responsiveLevel])) / 2) +
    list.padding[responsiveLevel] * 2
  }px`

export const RootWrapper = styled(
  getUBlockWithProps({
    styleConfig: {
      mt: theme.blocksSpace.map((n) => n - 1),
      mb: item.margin.map((n) => `-${n}px`),
    },
  })
)`
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`

export const Root = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit('div', ['itemsCount']),
    styleConfig: {
      px: list.padding.map((n) => `${n}px`),
    },
  })
)<{
  itemsCount: number
}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  ${({ itemsCount, ...props }) =>
    layout({
      ...props,
      width: [getRootWidth(itemsCount, 0), getRootWidth(itemsCount, 1)],
    })}

  > * {
    ${space({ ml: item.margin.map((n) => `${n}px`) })};
    ${left({ left: item.margin.map((n) => `-${n}px`) })};
  }
`

export const Item = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit(UButton, ['isActive']),
    styleConfig: {
      height: item.height.map((n) => `${n}px`),
      width: item.width.map((n) => `${n}px`),
      minWidth: item.width.map((n) => `${n}px`),
      mb: item.margin.map((n) => `${n}px`),
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
