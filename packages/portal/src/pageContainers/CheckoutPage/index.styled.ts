import theme from '@/styles/theme'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import UContent from '@/ui-components/UContent'
import styled from 'styled-components'
import { space } from 'styled-system'

export const Root = styled(
  getUBlockWithProps({
    tag: UContent,
  })
)``

export const TitleWrapper = styled(
  getUBlockWithProps({
    styleConfig: {
      mb: theme.blocksSpace.map((i) => i - 2),
    },
  })
)``

export const DeliveryTextWrapper = styled(
  getUBlockWithProps({
    styleConfig: {
      mb: theme.blocksSpace.map((i) => i - 2),
    },
  })
)``

export const ExtraInputsWrapper = styled(getUBlockWithProps())`
  display: flex;

  > * {
    flex: 5;
    ${({ theme }) => space({ ml: [1, 3], theme })}

    &:nth-child(2) {
      flex: 4;
    }

    &:nth-child(3) {
      flex: 8;
    }

    &:first-child {
      margin-left: 0;
    }
  }
`
