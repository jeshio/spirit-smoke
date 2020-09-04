import * as React from 'react'
import styled from 'styled-components'
import {
  layout,
  space,
  color,
  SpaceProps,
  ColorProps,
  display,
  DisplayProps,
  alignItems,
  justifyContent,
  AlignItemsProps,
  JustifyContentProps,
} from 'styled-system'
import { ThemeType } from '@/styles/theme'

interface IUBlockProps extends SpaceProps, ColorProps<ThemeType>, DisplayProps, AlignItemsProps, JustifyContentProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const Root = styled(({ children, className }: IUBlockProps) => <div className={className}>{children}</div>)`
  ${space}
  ${layout}
  ${color}
  ${display}
  ${alignItems}
  ${justifyContent}
`

const UBlock: React.FunctionComponent<IUBlockProps> = (props) => {
  return <Root {...props} />
}

export default UBlock
