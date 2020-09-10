import styled from 'styled-components'
import UBlock, { getUBlockWithProps } from '@/ui-components/UBlock'
import ULink from '@/ui-components/ULink'
import CProductCategoriesList from '../CProductCategoriesList'

export const Root = styled(UBlock)`
  display: flex;
`

export const StyledLogo = styled.div`
  font-size: 18px;
  font-weight: 600;
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
