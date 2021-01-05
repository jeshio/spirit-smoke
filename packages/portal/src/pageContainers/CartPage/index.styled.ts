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

export const ProductsList = styled(getUBlockWithProps())`
  > ${CartItem} {
    & + ${CartItem} {
      ${({ theme }) =>
        space({
          mt: [2],
          theme,
        })}
    }

    & + ${ProductCategoryTitleWrapper} {
      ${({ theme }) =>
        space({
          mt: theme.blocksSpace,
          theme,
        })}
    }
  }
`
