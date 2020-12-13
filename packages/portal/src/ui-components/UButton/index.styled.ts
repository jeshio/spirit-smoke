import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import { ComponentType } from 'react'
import styled, { css } from 'styled-components'
import { getUBlockWithProps } from '../UBlock'
import ButtonWithHref from './components/ButtonWithHref'
import { IUButtonProps } from './types'

export const StyledButton = styled<
  ComponentType<Omit<IUButtonProps, 'type'> & { colorType: IUButtonProps['type']; type: 'submit' | 'button' }>
>(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit<IUButtonProps & { colorType: IUButtonProps['type'] }>(ButtonWithHref, [
      'colorType',
      'icon',
      'noPaddings',
      'fill',
    ]),
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
  appearance: none;

  &:hover {
    color: currentColor;
  }

  ${({ colorType }) =>
    colorType === 'ghost' &&
    css`
      background: unset;
    `}

  ${({ colorType, theme, fill }) =>
    colorType === 'primary' &&
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

  ${({ colorType, theme, fill }) =>
    colorType === 'green' &&
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
  
  ${({ theme, disabled, fill }) =>
    disabled &&
    fill &&
    css`
      &,
      &:hover,
      &:focus {
        background-color: ${theme.colors.gray};
        color: ${theme.colors.placeholderColor};
        cursor: auto;
      }
    `}

  ${({ noPaddings }) =>
    noPaddings &&
    css`
      height: auto;
      padding: 0;
    `}
`
