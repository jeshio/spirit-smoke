import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import { ComponentType } from 'react'
import styled, { css } from 'styled-components'
import { getUBlockWithProps } from '../UBlock'
import { IUButtonProps } from './types'

export const StyledButton = styled<ComponentType<IUButtonProps>>(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit<IUButtonProps>('button', ['type', 'icon', 'noPaddings']),
    styleConfig: {
      px: [4],
      py: ['7px'],
      pb: ['9px'],
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

  ${({ type }) =>
    type === 'ghost' &&
    css`
      background: unset;
    `}

  ${({ type, theme, fill }) =>
    type === 'primary' &&
    css`
      color: ${fill ? theme.colors.white : theme.colors.blue};
      border: 1px solid ${fill ? 'transparent' : theme.colors.blue};
      background-color: ${fill ? theme.colors.blue : 'transparent'};

      svg {
        fill: ${theme.colors.blue};
      }
    `}

  ${({ type, theme, fill }) =>
    type === 'green' &&
    css`
      color: ${fill ? theme.colors.white : theme.colors.green};
      border: 1px solid ${fill ? 'transparent' : theme.colors.green};
      background-color: ${fill ? theme.colors.green : 'transparent'};

      svg {
        fill: ${theme.colors.green};
      }
    `}

  ${({ noPaddings }) =>
    noPaddings &&
    css`
      height: auto;
      padding: 0;
    `}
`
