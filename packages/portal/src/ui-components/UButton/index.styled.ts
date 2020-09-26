import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import { ComponentType } from 'react'
import styled, { css } from 'styled-components'
import { getUBlockWithProps } from '../UBlock'
import { IUButtonProps } from './types'

export const StyledButton = styled<ComponentType<IUButtonProps>>(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit<IUButtonProps>('button', ['type', 'icon', 'noPaddings']),
    styleConfig: {
      px: ['9px'],
    },
  })
)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: unset;
  outline: unset;
  background: unset;
  border-radius: 100px;
  height: 21px;

  ${({ type }) =>
    type === 'ghost' &&
    css`
      background: unset;
    `}

  ${({ type, theme }) =>
    type === 'primary' &&
    css`
      border: 1px solid ${theme.colors.blue};
    `}

  ${({ noPaddings }) =>
    noPaddings &&
    css`
      height: auto;
      padding: 0;
    `}
`
