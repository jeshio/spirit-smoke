import * as React from 'react'
import { IUButtonProps } from './types'

const UButton: React.FunctionComponent<IUButtonProps> = ({ icon, children }) => {
  let child = children

  if (icon) {
    child = icon
  }

  return <button>{child}</button>
}

export default UButton
