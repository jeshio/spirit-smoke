import * as React from 'react'
import { InputSearchIcon, Root, StyledInput } from './searchInput.styled'

interface ISearchInputProps {}

const SearchInput: React.FunctionComponent<ISearchInputProps> = (props) => {
  return (
    <Root>
      <StyledInput placeholder="Поиск в Spirit Smoke" />
      <InputSearchIcon />
    </Root>
  )
}

export default SearchInput
