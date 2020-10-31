import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import UButton from '@/ui-components/UButton'
import UList from '@/ui-components/UList'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'

export const ProductCard = styled(
  getUBlockWithProps({
    styleConfig: {
      width: ['180px'],
      height: ['168px'],
    },
  })
)`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 8px 8px 40px rgba(218, 220, 228, 0.5);
  display: flex;
  flex-direction: column;

  > * {
    position: relative;
  }
`

export const Header = styled(
  getUBlockWithProps({
    styleConfig: {
      height: ['112px'],
      px: [2],
      py: [2],
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
      marginBottom: ['8px'],
    },
  })
)``

export const Title = styled(
  getUBlockWithProps({
    tag: 'h4',
    styleConfig: {
      m: 0,
      fontSize: ['16px'],
    },
  })
)`
  color: #fff;
  letter-spacing: 0.05em;
  font-weight: 600;
`

export const CompanyName = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit('h6', ['color']),
    styleConfig: {
      fontSize: ['12px'],
      width: ['100%'],
      paddingLeft: [2],
      m: 0,
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
    width: 4px;
    border-radius: 5px;
  }
`

export const Description = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit('div', ['isVisible']),
    styleConfig: {
      p: [2],
      fontSize: ['13px'],
      width: ['180px'],
      top: ['43px'],
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
      right: 26px;
      top: -7px;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 7px solid ${theme.colors.black};
    }
  `
)

export const Footer = styled(
  getUBlockWithProps({
    styleConfig: {
      py: [1],
      px: [2],
    },
  })
)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`

export const Price = styled(
  getUBlockWithProps({
    styleConfig: {
      fontSize: ['18px'],
    },
  })
)`
  font-weight: 600;
`

export const FeatureList = styled(
  getUBlockWithProps({
    tag: UList,
  })
)`
  > * + * {
    ${space({ ml: [2] })};
  }
`

export const ButtonsBlock = styled(getUBlockWithProps())`
  display: flex;

  > * + * {
    ${space({ ml: [2] })};
  }
`

export const InfoButton = styled(
  getUBlockWithProps({
    tag: UButton,
    styleConfig: {
      width: ['24px'],
      height: ['24px !important'],
      fontSize: ['16px'],
      paddingLeft: ['7px'],
    },
  })
)`
  font-style: italic;
  border-radius: 50%;
  position: absolute;

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
    tag: UButton,
    styleConfig: {
      width: ['64px'],
      height: ['32px !important'],
    },
  })
)`
  border-radius: 100px;

  svg {
    width: 16px;
    height: 16px;
    margin-top: -1px;
    fill: ${({ theme }) => theme.colors.blue};
  }
`
