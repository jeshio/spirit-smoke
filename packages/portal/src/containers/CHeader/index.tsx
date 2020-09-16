import * as React from 'react'
import {
  StyledLogo,
  MenuItemLink,
  MenuList,
  Root,
  MenuItem,
  StyledCProductCategoriesList,
  StyledCartIcon,
} from './index.styled'
import ULink from '@/ui-components/ULink'
import SearchInput from './components/SearchInput'
import UButton from '@/ui-components/UButton'

interface ICHeaderProps {}

const CHeader: React.FunctionComponent<ICHeaderProps> = () => {
  return (
    <header>
      <Root>
        <ULink href="/">
          <StyledLogo>Spirit Smoke</StyledLogo>
        </ULink>
        <SearchInput />
        <UButton icon={<StyledCartIcon />} />
      </Root>
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
      <StyledCProductCategoriesList display={{ span: 'flex !important', xl: 'none !important' }} />
    </header>
  )
}

export default CHeader
