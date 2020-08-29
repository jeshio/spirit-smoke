import * as React from 'react'
import styled from 'styled-components'
import { layout, space, color, SpaceProps, ColorProps } from 'styled-system'
import { ThemeType } from '@/styles/theme'

interface IUBlockProps extends SpaceProps, ColorProps<ThemeType> {
  children?: React.ReactElement | React.ReactElement[]
  className?: string
}

const Root = styled(({ children, className }: IUBlockProps) => <div className={className}>{children}</div>)`
  ${space}
  ${layout}
  ${color}
`

const UBlock: React.FunctionComponent<IUBlockProps> = (props) => {
  return <Root {...props} />
}

export default UBlock
