import styled from 'styled-components'
import { bottom, space } from 'styled-system'
import { linearGradient } from 'polished'
import { getUBlockWithProps } from '../UBlock'
import UContent from '../UContent'
import displayWithVisibleChecking from '@/helpers/displayWithVisibleChecking'

export const Root = styled(
  getUBlockWithProps({
    tag: UContent,
    styleConfig: {
      px: 0,
    },
  })
)`
  [class~='slick-list'] {
    position: relative;
    ${({ theme }) =>
      space({
        mt: theme.blocksSpace.map((n) => -n + 2),
        pt: theme.blocksSpace.map((n) => n - 2),
        pb: theme.blocksSpace,
        mb: theme.blocksSpace.map((n) => -n),
        px: [3, 5],
        theme,
      })};

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: -1px;
      bottom: 0;
      width: 12px;
      z-index: 100;
    }

    &::before {
      left: -4px;
      ${({ theme }) =>
        linearGradient({
          colorStops: [`${theme.colors.backgroundColor} 50%`, 'transparent 100%'],
          toDirection: 'to right',
          fallback: 'transparent',
        })}
    }

    &::after {
      right: -3px;
      ${({ theme }) =>
        linearGradient({
          colorStops: [`${theme.colors.backgroundColor} 50%`, 'transparent 100%'],
          toDirection: 'to left',
          fallback: 'transparent',
        })}
    }
  }

  [class~='slick-slide'] {
    ${({ theme }) => space({ ml: [2, 3], theme })};

    &:first-child {
      margin-left: 0;
    }
  }

  [class~='slick-arrow'] {
    z-index: 10;
    width: 40px;
    height: 40px;
    opacity: 1 !important;
    ${({ theme }) => space({ ml: [2, 3], theme })};
    ${({ theme }) => displayWithVisibleChecking({ theme, display: 'block !important', visible: [false, true] })}

    &::before {
      font-size: 40px;
    }
  }

  [class~='slick-disabled'] {
    display: none !important;
  }

  [class~='slick-prev'] {
    left: 25px;
  }

  [class~='slick-next'] {
    right: 25px;
  }
`

export const StyledItem = styled(getUBlockWithProps())`
  outline: none;
`
