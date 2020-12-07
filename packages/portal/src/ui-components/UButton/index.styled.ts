import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import { ComponentType } from 'react'
import styled, { css } from 'styled-components'
import { getUBlockWithProps } from '../UBlock'
import ButtonWithHref from './components/ButtonWithHref'
import { IUButtonProps } from './types'

export const StyledButton = styled<ComponentType<IUButtonProps>>(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit<IUButtonProps>(ButtonWithHref, ['type', 'icon', 'noPaddings']),
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
  font-size: 14px;
  cursor: pointer;
  font-weight: 300;

  &:hover {
    color: currentColor;
  }

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

      &:hover {
        color: ${fill ? theme.colors.white : theme.colors.blue};
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

      &:hover {
        color: ${fill ? theme.colors.white : theme.colors.green};
      }
    `}

  ${({ noPaddings }) =>
    noPaddings &&
    css`
      height: auto;
      padding: 0;
    `}
`
