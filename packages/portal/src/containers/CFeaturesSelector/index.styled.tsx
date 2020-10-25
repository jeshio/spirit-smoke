import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import theme from '@/styles/theme'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import styled from 'styled-components'
import { left, space } from 'styled-system'

export const RootWrapper = styled(getUBlockWithProps())`
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`

const list = { span: { padding: theme.space[3] } }
const item = { span: { width: 46, height: 46, margin: theme.space[2] } }

export const Root = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit('div', ['itemsCount']),
    styleConfig: {
      px: [`${list.span.padding}px`],
      mb: [-2],
    },
  })
)<{
  itemsCount: number
}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: ${({ itemsCount }) =>
    `${((itemsCount + 1) * (item.span.width + item.span.margin)) / 2 + 2 * list.span.padding}px`};

  > * {
    ${space({ ml: [`${item.span.margin}px`] })};
    ${left({ left: [`-${item.span.margin}px`] })};
  }
`

export const Item = styled(
  getUBlockWithProps({
    styleConfig: {
      height: [`${item.span.height}px`],
      width: [`${item.span.width}px`],
      minWidth: [`${item.span.width}px`],
      mb: [`${item.span.margin}px`],
    },
  })
)`
  border-radius: 50%;
  text-align: center;
  font-size: 9px;
  background-color: ${({ theme }) => theme.colors.inactive.background};
  color: ${({ theme }) => theme.colors.inactive.color};
  position: relative;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  padding: 0 0 3px 0;
  border: unset;
`

export const ItemImage = styled(
  getUBlockWithProps({
    tag: 'img',
    styleConfig: {
      height: ['16px'],
      width: ['16px'],
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
