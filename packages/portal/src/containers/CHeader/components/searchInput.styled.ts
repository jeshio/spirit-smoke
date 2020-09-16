import { getUBlockWithProps } from '@/ui-components/UBlock'
import UInput from '@/ui-components/UInput'
import { SearchIcon } from '@@icons'
import { size } from 'polished'
import styled from 'styled-components'

export const Root = styled(
  getUBlockWithProps({
    width: ['100%'],
    mx: ['12px'],
  })
)`
  position: relative;
`

export const StyledInput = styled(
  getUBlockWithProps({
    tag: UInput,
    height: ['32px'],
    px: ['18px'],
    py: ['0'],
    paddingBottom: ['2px'],
  })
)`
  border: none;
  outline: none;
  border-radius: 20px !important;
  width: 100%;

  &::placeholder {
    font-weight: 200;
    font-size: 11px;
  }
`

export const InputSearchIcon = styled(SearchIcon)`
  position: absolute;
  color: ${({ theme }) => theme.colors.placeholderColor};
  right: 14px;
  top: 50%;
  margin-top: -6px;

  ${size(12)}
`
