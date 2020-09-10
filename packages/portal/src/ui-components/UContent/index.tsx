import * as React from 'react'
import { Root } from './index.styled'

interface IUContentProps {}

/**
 * Отображает контент с отступами по бокам
 */
const UContent: React.FunctionComponent<IUContentProps> = (props) => {
  return (
    <Root mx="auto" px={[0, 0, 2, 3, 4]}>
      {props.children}
    </Root>
  )
}

export default UContent
