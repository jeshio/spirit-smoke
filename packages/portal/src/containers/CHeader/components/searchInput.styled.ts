import { getUBlockWithProps } from '@/ui-components/UBlock'
import UInput from '@/ui-components/UInput'
import { SearchIcon } from '@@icons'
import { size } from 'polished'
import styled from 'styled-components'

export const Root = styled(
  getUBlockWithProps({
    styleConfig: {
      width: ['100%'],
      mx: ['12px'],
      paddingRight: ['15px'],
      my: [0],
    },
  })
)`
  position: relative;
`

export const StyledInput = styled(
  getUBlockWithProps({
    tag: UInput,
    styleConfig: {
      height: ['29px'],
      py: [0],
      px: [4],
      paddingBottom: ['2px'],
    },
  })
)`
  border: none;
  outline: none;
  border-radius: 20px !important;
  width: 100%;
  box-shadow: unset;
  margin: 0;

  &::placeholder {
    font-weight: 200;
    font-size: 11px;
  }
`

export const InputSearchIcon = styled(SearchIcon)`
  position: absolute;
  color: ${({ theme }) => theme.colors.placeholderColor};
  right: 29px;
  top: 50%;
  margin-top: -6px;
  fill: transparent;

  ${size(12)}
`
