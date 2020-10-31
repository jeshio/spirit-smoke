import * as React from 'react'
import {
  StyledLogo,
  PhoneNumberLink,
  MenuItemLink,
  MenuList,
  TopBar,
  MenuItem,
  StyledCartIcon,
  Root,
  SubHeader,
} from './index.styled'
import ULink from '@/ui-components/ULink'
import SearchInput from './components/SearchInput'
import UButton from '@/ui-components/UButton'
import { CallIcon } from '@@icons'

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
        <PhoneNumberLink href="tel:+79527777777">
          <CallIcon /> +7 (952) 777-77-77
        </PhoneNumberLink>
        <MenuList>
          <MenuItem>
            <MenuItemLink href="/test">контакты</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="/about">о нас</MenuItemLink>
          </MenuItem>
        </MenuList>
      </SubHeader>
    </Root>
  )
}

export default CHeader
