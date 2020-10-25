import * as React from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { layout, space, color, alignItems, justifyContent, top, bottom, left, right, fontSize } from 'styled-system'
import setProps from '@/wrappers/setProps'
import { UBlockPropsType, TagType } from './types'
import displayWithVisibleChecking from '@/helpers/displayWithVisibleChecking'

export const UBlockRefContext = React.createContext(null)

const Root = styled(({ tag: Tag = 'div', tagComponentProps, className }: UBlockPropsType<any>) => {
  const ref = React.useContext(UBlockRefContext)
  return <Tag {...tagComponentProps} className={cn(className, tagComponentProps.className)} ref={ref} />
})`
  ${space}
  ${layout}
  ${color}
  ${displayWithVisibleChecking}
  ${alignItems}
  ${justifyContent}
  ${top}
  ${bottom}
  ${left}
  ${right}
  ${fontSize}
`

function UBlock<T extends TagType>({ styleConfig, tag, ...props }: UBlockPropsType<T>): JSX.Element {
  return <Root {...styleConfig} tagComponentProps={props} tag={tag} />
}

/**
 * Возвращает UBlock с предустановленными свойствами
 */
export const getUBlockWithProps = <T extends TagType = 'div'>(
  props: Partial<React.ComponentProps<typeof UBlock>> & { tag?: T } = {}
) => setProps<UBlockPropsType<T>>(props as any)(UBlock)

export default UBlock
