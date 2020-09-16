import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import { ComponentType } from 'react'
import styled, { css } from 'styled-components'
import { getUBlockWithProps } from '../UBlock'
import { IUButtonProps } from './types'

export const StyledButton = styled<ComponentType<IUButtonProps>>(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit<IUButtonProps>('button', ['type', 'icon', 'noPaddings']),
  })
)`
  display: flex;
  align-items: center;

  ${({ type }) =>
    type === 'ghost' &&
    css`
      background: unset;
      border: unset;
      outline: unset;
    `}
  ${({ noPaddings }) =>
    noPaddings &&
    css`
      padding: 0;
    `}
`
