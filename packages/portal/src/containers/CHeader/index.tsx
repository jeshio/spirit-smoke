import * as React from 'react'
import UContent from '@/ui-components/UContent'
import { StyledLogo, MenuItemLink, MenuList, Root, MenuItem, StyledCProductCategoriesList } from './index.styled'
import ULink from '@/ui-components/ULink'

interface ICHeaderProps {}

const CHeader: React.FunctionComponent<ICHeaderProps> = () => {
  return (
    <header>
      <UContent>
        <Root>
          <ULink href="/">
            <StyledLogo>Spirit Smoke</StyledLogo>
          </ULink>
          <StyledCProductCategoriesList display={{ span: 'none !important', xl: 'flex !important' }} />
          <MenuList m={0} p={0}>
            <MenuItem>
              <MenuItemLink
                tagComponentProps={{
                  href: '/test',
                }}
              >
                Контакты
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                tagComponentProps={{
                  href: '/about',
                }}
              >
                О нас
              </MenuItemLink>
            </MenuItem>
          </MenuList>
        </Root>
        <StyledCProductCategoriesList display={{ span: 'flex !important', xl: 'none !important' }} />
      </UContent>
    </header>
  )
}

export default CHeader
