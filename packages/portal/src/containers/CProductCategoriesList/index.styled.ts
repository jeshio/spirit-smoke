import styled, { css } from 'styled-components'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import ULink from '@/ui-components/ULink'
import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'

export const Content = styled(
  getUBlockWithProps({
    styleConfig: {
      paddingLeft: ['50%'],
      marginLeft: ['-32px'],
    },
  })
)``

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
      mx: ['18px', 21],
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
