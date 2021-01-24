import createComponentWithPropsOmit from '@/helpers/createComponentWithPropsOmit'
import theme from '@/styles/theme'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import styled, { css } from 'styled-components'

export const Root = styled(
  getUBlockWithProps({
    tag: createComponentWithPropsOmit('div', ['isVisible']),
    styleConfig: {
      height: theme.bottomBar.height,
      width: ['100%'],
      bottom: theme.bottomBar.height.map((s) => `-${s}px`),
    },
  })
)<{
  isVisible: boolean
}>(
  ({ isVisible, theme }) => css`
    background-color: #fff;
    position: fixed;
    ${isVisible ? 'bottom: 0;' : ''}
    left: 0;
    overflow-y: hidden;
    box-shadow: ${theme.bottomBar.boxShadow};
    z-index: 1000;
  `
)
