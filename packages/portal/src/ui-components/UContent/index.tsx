import UBlock, { getUBlockWithProps } from '../UBlock'
import styled from 'styled-components'

/**
 * Отображает контент с отступами по бокам
 */
const UContent = styled(
  getUBlockWithProps({
    tag: UBlock,
    styleConfig: {
      mx: 'auto',
      px: [3, 5],
    },
  })
)`
  max-width: 1220px;
`

export default UContent
