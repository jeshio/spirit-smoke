import styled from 'styled-components'
import { space } from 'styled-system'
import { getUBlockWithProps } from '../UBlock'

export const Slider = styled(getUBlockWithProps())`
  display: flex;
  overflow-x: scroll;
  overflow-y: visible;
`

export const StyledItem = styled(getUBlockWithProps())`
  & + & {
    ${({ theme }) => space({ ml: [theme.space[2]] })};
  }
`
