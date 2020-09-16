import styled from 'styled-components'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import ULink from '@/ui-components/ULink'
import CProductCategoriesList from '../CProductCategoriesList'
import { size } from 'polished'
import { CartIcon } from '@@icons'

export const Root = styled(
  getUBlockWithProps({
    px: ['12px'],
    height: ['55px'],
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
  })
)`
  display: flex;
`

export const MenuItem = styled(
  getUBlockWithProps({
    tag: 'li',
  })
)`
  list-style: none;
`

export const MenuItemLink = styled(
  getUBlockWithProps({
    tag: ULink,
    px: [1, 1, 2, 2, 4],
    py: [, , , , , 3],
  })
)`
  text-align: center;
`

export const StyledCProductCategoriesList = styled(
  getUBlockWithProps({
    tag: CProductCategoriesList,
  })
)``

export const StyledCartIcon = styled(CartIcon)`
  color: #fff;
`
