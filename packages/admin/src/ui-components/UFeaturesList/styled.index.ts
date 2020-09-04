import styled, { css } from 'styled-components'
import theme from '@/styles/theme'
import UBlock from '../UBlock'

export const Root = styled(UBlock)`
  display: flex;
  flex-wrap: wrap;
`

export const Item = styled<any>(UBlock)`
  margin-right: 5px;
  padding: 4px 0;

  ${({ isMini }) =>
    isMini &&
    css`
      margin-right: 0;
      margin-left: -6px;
      padding: 1px 0;
    `}
`

export const Image = styled.div<any>`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${() => theme.colors.disableColor};
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  ${({ isMini }) =>
    isMini &&
    css`
      width: 24px;
      height: 24px;
      border: 2px solid #fff;
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      &::after {
        content: '';
        position: absolute;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }
    `}
`
