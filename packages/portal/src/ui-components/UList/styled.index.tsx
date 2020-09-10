import styled, { css } from 'styled-components'
import { getUBlockWithProps } from '../UBlock'
import { IUListProps } from './types'

export const List = styled(
  getUBlockWithProps({
    tag: 'ul',
    m: 0,
    p: 0,
  })
)<Partial<IUListProps>>`
  ${({ isHorizontal }) =>
    isHorizontal &&
    css`
      display: flex;
    `}
`

export const Item = styled(
  getUBlockWithProps({
    tag: 'li',
  })
)`
  list-style: none;
`
