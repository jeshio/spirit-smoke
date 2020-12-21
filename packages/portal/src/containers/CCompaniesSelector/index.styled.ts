import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import theme from '@/styles/theme'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import UButton from '@/ui-components/UButton'
import UList from '@/ui-components/UList'
import { size } from 'polished'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'

export const Root = styled(
  getUBlockWithProps({
    tag: UList,
    styleConfig: {
      px: [3],
      mt: theme.blocksSpace,
      pb: [2],
      mb: [-2],
    },
  })
)`
  max-width: 100%;
  overflow-x: scroll;

  > * + * {
    ${({ theme }) => space({ ml: [3], theme })}
  }
`

export const CompanyItem = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit(UButton, ['color', 'isActive']),
    styleConfig: {
      height: ['64px !important'],
      width: ['64px'],
    },
  })
)<{
  color?: string
  isActive?: boolean
}>`
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.placeholderColor};
  position: relative;
  font-weight: 100;
  align-items: center;
  justify-content: center;
  padding: 0 0 3px 0;
  border: unset;

  &::after {
    content: '';
    position: absolute;
    ${size(4, 10)};
    border-radius: 4px;
    background-color: #fff;
    bottom: 7px;
    left: 50%;
    margin-left: -5px;
  }

  ${({ isActive, theme, color }) =>
    isActive &&
    css`
      background-color: ${theme.colors.primaryColor};
      color: #fff;

      &::after {
        background-color: ${color};
      }
    `}
`
