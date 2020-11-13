import React, { useEffect, useState } from 'react'
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
  StyledCartButton,
  CartButtonCount,
} from './index.styled'
import ULink from '@/ui-components/ULink'
import SearchInput from './components/SearchInput'
import { CallIcon } from '@@icons'
import { useReactiveVar } from '@apollo/client'
import { cartItemsVar } from '@/gql/cache/vars/Cart'

interface ICHeaderProps {}

const CHeader: React.FunctionComponent<ICHeaderProps> = () => {
  const [cartItemsCountIsVisible, setCartItemsCountIsVisible] = useState(false)
  const cartItems = useReactiveVar(cartItemsVar)

  useEffect(() => {
    // фикс, чтобы на сервере и клиенте совпадал контент при первом рендре
    setCartItemsCountIsVisible(true)
  }, [])

  return (
    <Root>
      <TopBar>
        <ULink href="/">
          <StyledLogo>Spirit Smoke</StyledLogo>
        </ULink>
        <SearchInput />
        <StyledCartButton icon={<StyledCartIcon />} type="ghost" noPaddings>
          {cartItemsCountIsVisible && cartItems.length > 0 && <CartButtonCount>{cartItems.length}</CartButtonCount>}
        </StyledCartButton>
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
