import media from '@/styles/media'
import theme from '@/styles/theme'
import { getUBlockWithProps } from '@/ui-components/UBlock'
import styled from 'styled-components'
import { space } from 'styled-system'
import CartItem from './components/CartItem'

export const TitleWrapper = styled(
  getUBlockWithProps({
    styleConfig: {
      mb: theme.blocksSpace.map((i) => i - 2),
    },
  })
)``

export const ProductCategoryTitleWrapper = styled(
  getUBlockWithProps({
    styleConfig: {
      mb: theme.blocksSpace.map((i) => i - 2),
    },
  })
)``

export const ProductsList = styled(
  getUBlockWithProps({
    styleConfig: {
      mb: theme.blocksSpace,
    },
  })
)`
  ${media.sm(`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${theme.space[3]}px;
    grid-row-gap: ${theme.space[3]}px;
  `)}

  > ${CartItem} {
    & + ${CartItem} {
      ${(props) =>
        space({
          ...props,
          mt: [2, 0],
        })}
    }
  }
`
