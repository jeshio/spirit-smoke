import styled from 'styled-components'
import { getUBlockWithProps } from '../UBlock'
import { IUButtonProps } from './types'

export const StyledButton = styled<{ tagComponentProps: IUButtonProps }>(
  getUBlockWithProps({
    tag: 'button',
  })
)``
