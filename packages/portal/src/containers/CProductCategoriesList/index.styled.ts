import styled, { css } from 'styled-components'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import ULink from '@/ui-components/ULink'
import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'

export const Root = styled(
  getUBlockWithProps({
    styleConfig: {
      width: ['100%'],
      height: ['55px'],
    },
  })
)`
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow-y: hidden;
`

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
    styleConfig: {
      px: [2],
      py: [1],
    },
    tag: ULink,
  })
)`
  color: ${({ theme }) => theme.colors.placeholderColor};
  font-size: 11px;
  display: block;
  text-align: center;
  position: relative;
`

export const ItemImage = styled<any>(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit('div', ['maskUrl']),
    styleConfig: {
      height: ['23px'],
      width: ['23px'],
      mx: ['18px'],
      marginTop: ['5px'],
      marginBottom: ['23px'],
    },
  })
)`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  background-color: ${({ theme }) => theme.colors.placeholderColor};
  mask-size: cover;

  ${({ maskUrl }: any) => css`
    mask-image: url(${maskUrl});
  `}
`

export const ItemText = styled(
  getUBlockWithProps({
    styleConfig: {
      top: ['36px'],
    },
  })
)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`
