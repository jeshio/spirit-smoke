import styled from 'styled-components'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import ULink from '@/ui-components/ULink'
import { CartIcon } from '@@icons'
import UContent from '@/ui-components/UContent'
import theme from '@/styles/theme'
import UButton from '@/ui-components/UButton'
import media from '@/styles/media'

export const Root = styled.header``

export const TopBar = styled(
  getUBlockWithProps({
    styleConfig: {
      height: ['55px', '65px'],
      width: '100%',
    },
  })
)`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  box-shadow: 0px 0px 2px rgba(154, 154, 154, 0.5);
  z-index: 100;

  ${media.md`
    max-width: 100%;
  `}
`

export const TopBarContent = styled(
  getUBlockWithProps({
    tag: UContent,
    styleConfig: {
      height: '100%',
    },
  })
)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledLogo = styled(
  getUBlockWithProps({
    styleConfig: {
      height: [32, 38],
      width: [32, 38],
    },
  })
)`
  font-weight: 600;
  overflow: hidden;
  background-color: #ffbe3f;
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
      marginLeft: [21, 28],
    },
  })
)`
  list-style: none;
`

export const MenuItemLink = styled(
  getUBlockWithProps({
    tag: ULink,
    styleConfig: {
      fontSize: [15, 17],
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
      fontSize: [13, 14],
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
      pt: [`${theme.space[2] + 55}px`, `${theme.space[2] + 65}px`],
      mb: theme.blocksSpace.map((n) => n - 2),
      fontSize: [14, 18],
    },
  })
)`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 5px rgba(201, 201, 231, 0.2);
`

export const StyledCartIcon = styled(
  getUBlockWithProps({
    tag: CartIcon,
    styleConfig: {
      width: ['29px', '34px'],
      height: ['29px', '34px'],
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
      width: ['16px', '19px'],
      height: ['16px', '19px'],
      fontSize: [11, 14],
      right: ['-3px', '-5px'],
    },
  })
)`
  position: absolute;
  top: -1px;
  background-color: ${theme.colors.blue};
  color: #fff;
  border-radius: 50%;
  font-weight: 500;
`
