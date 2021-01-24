import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import theme from '@/styles/theme'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import UButton from '@/ui-components/UButton'
import UContent from '@/ui-components/UContent'
import USlider from '@/ui-components/USlider'
import { darken, lighten, rgba } from 'polished'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'

export const RootWrapper = styled(
  getUBlockWithProps({
    tag: UContent,
    styleConfig: {
      mt: [2, 1],
      px: [0],
      pb: ['12px'],
      mb: ['-12px'],
    },
  })
)``

export const Root = styled(
  getUBlockWithProps({
    tag: USlider,
  })
)`
  > * + * {
    ${({ theme }) => space({ ml: [3, 4], theme })}
  }
`

export const CompanyItem = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit(UButton, ['color', 'isActive']),
    styleConfig: {
      height: [64, 78],
      width: [64, 78],
      fontSize: [12, 13],
      py: ['3px'],
      px: ['5px'],
    },
  })
)<{
  color?: string
  isActive?: boolean
}>`
  border-radius: 50%;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.inactive.background};
  color: ${({ theme }) => theme.colors.inactive.color};
  position: relative;
  font-weight: 100;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: unset;
  z-index: 1;
  box-shadow: 4px 2px 10px ${({ theme }) => rgba(theme.colors.inactive.color, 0.5)};

  &:active,
  &:hover {
    color: ${({ theme }) => theme.colors.inactive.color};
  }

  &:focus {
    color: ${({ theme }) => darken(0.3, theme.colors.inactive.color)};
  }

  ${({ isActive, theme, color }) =>
    isActive &&
    css`
      background-color: ${theme.colors.primaryColor};
      box-shadow: 4px 2px 10px ${rgba(lighten(0.1, color), 1)};
      color: #fff;

      &:active,
      &:hover {
        color: #fff;
      }

      &:focus {
        color: #ddd;
      }
    `}
`
