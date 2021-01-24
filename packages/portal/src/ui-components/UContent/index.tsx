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
      maxWidth: [1220],
    },
  })
)``

export default UContent
