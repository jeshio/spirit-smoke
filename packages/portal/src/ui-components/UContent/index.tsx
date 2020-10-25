import { getUBlockWithProps } from '../UBlock'
import styled from 'styled-components'

/**
 * Отображает контент с отступами по бокам
 */
const UContent = styled(
  getUBlockWithProps({
    styleConfig: {
      mx: 'auto',
      px: [3],
    },
  })
)`
  max-width: 1220px;
`

export default UContent
