import IWithClassName from '@/types/props/IWithClassName'
import React from 'react'
import { Root } from './index.styled'

interface IUBottomBarProps extends IWithClassName {
  isVisible: boolean
}

const UBottomBar: React.FunctionComponent<IUBottomBarProps> = ({ children, isVisible, className }) => {
  return (
    <Root isVisible={isVisible} className={className}>
      {children}
    </Root>
  )
}

export default UBottomBar
