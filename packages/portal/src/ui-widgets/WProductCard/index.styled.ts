import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import theme from '@/styles/theme'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import UButton from '@/ui-components/UButton'
import UList from '@/ui-components/UList'
import styled, { css } from 'styled-components'
import { layout, position, space } from 'styled-system'
import WCartItemCounter from '../WCartItemCounter'

export const ProductCard = styled(
  getUBlockWithProps({
    styleConfig: {
      width: [180, 200],
      height: [180, 200],
      borderRadius: theme.card.borderRadius,
    },
  })
)`
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.card.boxShadow};
  display: flex;
  flex-direction: column;

  > * {
    position: relative;
  }
`

export const Header = styled(
  getUBlockWithProps({
    styleConfig: {
      height: [124, 140],
      px: [2, 3],
      pt: [3, 4],
      pb: [2, 2],
    },
  })
)`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 10;
`

export const ImageWrapper = styled(getUBlockWithProps())`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  border-radius: 5px 5px 0 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, rgba(125, 125, 145, 0.5) 0%, rgba(18, 19, 26, 0.9) 100%);
  }
`

export const Image = styled(
  getUBlockWithProps({
    tag: 'img',
  })
)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
`

export const TagsRow = styled(
  getUBlockWithProps({
    styleConfig: {
      height: ['12px'],
      marginBottom: ['8px', '4px'],
    },
  })
)``

export const Title = styled(
  getUBlockWithProps({
    tag: 'h4',
    styleConfig: {
      m: 0,
      fontSize: [16, 18],
      lineHeight: ['18px', '20px'],
      maxHeight: [36, 40],
    },
  })
)`
  color: #fff;
  letter-spacing: 0.05em;
  font-weight: 600;
  overflow: hidden;
`

export const CompanyName = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit('h6', ['color']),
    styleConfig: {
      fontSize: [12, 14],
      width: ['100%'],
      pl: [3],
      m: 0,
      pr: ['18px'],
      mb: ['3px'],
    },
  })
)<{
  color?: string
}>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.05em;

  &::before {
    content: '';
    background-color: ${({ color = '' }) => color};
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    ${(props) =>
      layout({
        ...props,
        width: ['4px', '8px'],
      })}
  }
`

export const Description = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit('div', ['isVisible']),
    styleConfig: {
      p: [3],
      fontSize: [13, 15],
      width: [180, 210],
      top: [41, 43],
      right: [-4],
    },
  })
)<{
  isVisible: boolean
}>(
  ({ theme, isVisible }) => css`
    position: absolute;
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    z-index: 10;
    opacity: ${isVisible ? '1' : '0'};
    border-radius: 5px;
    pointer-events: none;
    transition: opacity 0.2s;

    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 7px solid ${theme.colors.black};
      ${(props) =>
        position({
          ...props,
          right: [19, 21],
          top: [-7, -5],
        })}
    }
  `
)

export const Footer = styled(
  getUBlockWithProps({
    styleConfig: {
      py: [1],
      px: [2, 3],
    },
  })
)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`

export const FeatureList = styled(
  getUBlockWithProps({
    tag: UList,
  })
)`
  > * + * {
    ${({ theme }) => space({ ml: [2], theme })};
  }
`

export const ButtonsBlock = styled(getUBlockWithProps())`
  display: flex;

  > * + * {
    ${({ theme }) => space({ ml: [2], theme })};
  }
`

export const InfoButton = styled(
  getUBlockWithProps({
    tag: 'button',
    styleConfig: {
      width: [24, 28],
      height: [24, 28],
      fontSize: [16, 18],
      pr: ['8px', '9px'],
    },
  })
)`
  font-style: italic;
  border-radius: 50%;
  position: absolute;
  border: unset;
  outline: unset;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
    border: unset;
    right: ${theme.space[2]}px;
    top: ${theme.space[2]}px;
  `};
`

export const BuyButton = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit(UButton, ['isVisible']),
    styleConfig: {
      width: [64, 74],
      height: [32, 35],
    },
  })
)<{
  isVisible: boolean
}>(
  ({ isVisible }) => css`
    border-radius: 100px;
    opacity: ${isVisible ? 1 : 0};
    pointer-events: ${isVisible ? 'auto' : 'none'};
    transform: translateX(${isVisible ? 0 : '-10px'});
    transform-origin: top right;
    transition: opacity 0.25s, transform 0.25s;

    svg {
      margin-top: -1px;
      fill: ${({ theme }) => theme.colors.blue};
      ${(props) =>
        layout({
          ...props,
          width: [16, 18],
          height: [16, 18],
        })}
    }
  `
)

export const StyledWCartItemCounter = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit(WCartItemCounter, ['isVisible']),
    styleConfig: {
      right: [2, 3],
    },
  })
)<{
  isVisible: boolean
}>(
  ({ isVisible }) => css`
    position: absolute;
    opacity: ${isVisible ? 1 : 0};
    pointer-events: ${isVisible ? 'auto' : 'none'};
    transform: translateX(${isVisible ? 0 : '-10px'});
    transform-origin: top right;
    transform-origin: center right;
    transition: opacity 0.25s, transform 0.25s;
  `
)
