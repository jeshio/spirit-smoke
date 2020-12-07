import styled, { css } from 'styled-components'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import ULink from '@/ui-components/ULink'
import { size } from 'polished'
import { CartIcon } from '@@icons'
import UContent from '@/ui-components/UContent'
import theme from '@/styles/theme'
import UButton from '@/ui-components/UButton'
import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'

export const Root = styled.header``

export const TopBar = styled(
  getUBlockWithProps({
    tag: UContent,
    styleConfig: {
      height: ['55px'],
      width: '100%',
    },
  })
)`
  position: fixed;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  box-shadow: 0px 0px 2px rgba(154, 154, 154, 0.5);
  z-index: 100;
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
    styleConfig: {
      fontSize: ['15px'],
    },
  })
)`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: 300;
`

export const PhoneNumberLink = styled(
  getUBlockWithProps({
    tag: ULink,
    styleConfig: {
      fontSize: ['13px'],
    },
  })
)`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: 500;
  letter-spacing: 1.1px;

  svg {
    fill: ${({ theme }) => theme.colors.blue};
    margin-right: 1px;
    margin-bottom: -1px;
  }
`

export const SubHeader = styled(
  getUBlockWithProps({
    tag: UContent,
    styleConfig: {
      py: [2],
      pt: [`${theme.space[2] + 55}px`],
      mb: theme.blocksSpace.map((n) => n - 2),
    },
  })
)`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  box-shadow: 0px 4px 5px rgba(201, 201, 231, 0.2);
`

export const StyledCartIcon = styled(
  getUBlockWithProps({
    tag: CartIcon,
    styleConfig: {
      width: ['26px'],
      height: ['26px'],
      marginTop: ['-2px'],
    },
  })
)`
  fill: ${({ theme }) => theme.colors.secondColor};
`

export const StyledCartButton = styled(UButton)`
  position: relative;
`

export const CartButtonCount = styled(
  getUBlockWithProps({
    styleConfig: {
      width: ['15px'],
      height: ['15px'],
    },
  })
)`
  position: absolute;
  right: -1px;
  top: -1px;
  width: 15px;
  height: 15px;
  background-color: ${theme.colors.blue};
  color: #fff;
  border-radius: 50%;
  font-size: 10px;
`
