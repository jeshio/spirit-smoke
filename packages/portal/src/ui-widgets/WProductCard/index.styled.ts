import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import UButton from '@/ui-components/UButton'
import UList from '@/ui-components/UList'
import styled, { css } from 'styled-components'

export const Root = styled(
  getUBlockWithProps({
    styleConfig: {
      width: ['140px'],
      height: ['147px'],
    },
  })
)`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 8px 8px 40px rgba(218, 220, 228, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  > * {
    position: relative;
  }
`

export const Header = styled(
  getUBlockWithProps({
    styleConfig: {
      height: ['100px'],
      px: ['11px'],
      py: ['10px'],
    },
  })
)`
  background-color: #555;
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
      fontSize: ['14px'],
    },
  })
)`
  color: #fff;
`

export const CompanyName = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit('h6', ['color']),
    styleConfig: {
      fontSize: ['10px'],
      width: ['100%'],
      m: 0,
    },
  })
)<{
  color?: string
}>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ color = '' }) => color};
`

export const Footer = styled(
  getUBlockWithProps({
    styleConfig: {
      py: ['2px'],
      px: ['10px'],
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
      fontSize: ['14px'],
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
    margin-left: 8px;
  }
`

export const ButtonsBlock = styled(getUBlockWithProps())`
  display: flex;

  > * + * {
    margin-left: 7px;
  }
`

export const InfoButton = styled(
  getUBlockWithProps({
    tag: UButton,
    styleConfig: {
      width: ['22px'],
      paddingRight: ['11px'],
    },
  })
)`
  font-style: italic;
  border-radius: 50%;

  ${({ theme }) => css`
    color: ${theme.colors.black};
    border-color: ${theme.colors.black};
  `};
`
