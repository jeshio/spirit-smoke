import styled from 'styled-components'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import ULink from '@/ui-components/ULink'
import { size } from 'polished'
import { CartIcon } from '@@icons'
import UContent from '@/ui-components/UContent'

export const Root = styled.header`
  overflow-x: hidden;
`

export const TopBar = styled(
  getUBlockWithProps({
    tag: UContent,
    styleConfig: {
      height: ['55px'],
    },
  })
)`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryColor};
`

export const StyledLogo = styled.div`
  font-weight: 600;
  overflow: hidden;
  ${size(32)}
  background-color: #FFBE3F;
  border-radius: 50%;
  font-size: 9px;
`

export const MenuList = styled(
  getUBlockWithProps({
    tag: 'ul',
    styleConfig: {
      m: [0],
      p: [0],
    },
  })
)`
  display: flex;
  text-align: right;
`

export const MenuItem = styled(
  getUBlockWithProps({
    tag: 'li',
    styleConfig: {
      marginLeft: ['21px'],
    },
  })
)`
  list-style: none;
`

export const MenuItemLink = styled(
  getUBlockWithProps({
    tag: ULink,
    styleConfig: {},
  })
)``

export const SubHeader = styled(
  getUBlockWithProps({
    tag: UContent,
    styleConfig: {
      py: ['7px'],
    },
  })
)`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`

export const StyledCartIcon = styled(
  getUBlockWithProps({
    tag: CartIcon,
    styleConfig: {
      width: ['28px'],
      height: ['28px'],
      marginTop: ['-2px'],
    },
  })
)`
  color: #fff;
`
