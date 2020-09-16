import * as React from 'react'
import { StyledLogo, MenuItemLink, MenuList, TopBar, MenuItem, StyledCartIcon, Root, SubHeader } from './index.styled'
import ULink from '@/ui-components/ULink'
import SearchInput from './components/SearchInput'
import UButton from '@/ui-components/UButton'

interface ICHeaderProps {}

const CHeader: React.FunctionComponent<ICHeaderProps> = () => {
  return (
    <Root>
      <TopBar>
        <ULink href="/">
          <StyledLogo>Spirit Smoke</StyledLogo>
        </ULink>
        <SearchInput />
        <UButton icon={<StyledCartIcon />} type="ghost" noPaddings />
      </TopBar>
      <SubHeader>
        <ULink href="tel:89527777777">8 (952) 777-77-77</ULink>
        <MenuList>
          <MenuItem>
            <MenuItemLink href="/test">Контакты</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="/about">О нас</MenuItemLink>
          </MenuItem>
        </MenuList>
      </SubHeader>
    </Root>
  )
}

export default CHeader
