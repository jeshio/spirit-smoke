import styled, { css } from 'styled-components'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import ULink from '@/ui-components/ULink'
import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import UBottomBar from '@/ui-components/UBottomBar'
import media from '@/styles/media'
import UList from '@/ui-components/UList'

export const Root = styled(
  getUBlockWithProps({
    tag: UBottomBar,
  })
)`
  display: flex;
  justify-content: center;
`

export const Content = styled(
  getUBlockWithProps({
    styleConfig: {},
  })
)`
  overflow-x: scroll;

  ${media.md`
    scrollbar-width: none;
    
    &::-webkit-slider-thumb,
    &::-webkit-scrollbar {
      display: none;
    }
  `}
`

export const List = styled(
  getUBlockWithProps({
    tag: UList,
    styleConfig: {
      mt: ['-1px'],
    },
  })
)`
  overflow-y: hidden;
`

export const Item = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit(ULink, ['isActive']),
    styleConfig: {
      px: [2],
      py: [1],
      fontSize: [11, 13],
      lineHeight: ['10px', '12px'],
    },
  })
)<{
  isActive?: boolean
}>`
  color: ${({ theme }) => theme.colors.placeholderColor};
  display: block;
  text-align: center;
  position: relative;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.colors.primaryColor} !important;
      pointer-events: none;
    `}
`

export const ItemImage = styled<any>(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit('div', ['maskUrl', 'isActive']),
    styleConfig: {
      height: [23, 24],
      width: [23, 24],
      mx: [18, 21, 30],
      marginTop: ['5px'],
      marginBottom: ['23px'],
    },
  })
)<{
  isActive?: boolean
}>`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  background-color: ${({ theme }) => theme.colors.placeholderColor};
  mask-size: cover;

  ${({ maskUrl }: any) => css`
    mask-image: url(${maskUrl});
  `}

  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-color: ${theme.colors.primaryColor};
    `}
`

export const ItemText = styled(
  getUBlockWithProps({
    styleConfig: {
      top: [38],
    },
  })
)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`
