import styled from 'styled-components'
import { getUBlockWithProps } from '../UBlock'

export const Root = styled(getUBlockWithProps())`
  display: flex;
  overflow-x: scroll;
  overflow-y: visible;
`

export const StyledItem = styled(getUBlockWithProps())`
  * + & {
    margin-left: 10px;
  }
`
