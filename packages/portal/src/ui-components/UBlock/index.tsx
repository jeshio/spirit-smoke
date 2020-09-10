import * as React from 'react'
import styled from 'styled-components'
import { layout, space, color, alignItems, justifyContent } from 'styled-system'
import setProps from '@/wrappers/setProps'
import { UBlockPropsType, TagType } from './types'
import displayWithVisibleChecking from '@/helpers/displayWithVisibleChecking'

const Root = styled(({ children, className, tag: Tag = 'div', tagComponentProps }: UBlockPropsType<any>) => (
  <Tag {...tagComponentProps} className={className}>
    {children}
  </Tag>
))`
  ${space}
  ${layout}
  ${color}
  ${displayWithVisibleChecking}
  ${alignItems}
  ${justifyContent}
`

function UBlock<T extends TagType>({ tagComponentProps, tag, ...props }: UBlockPropsType<T>): JSX.Element {
  return <Root tagComponentProps={tagComponentProps} {...props} tag={tag} />
}

/**
 * Возвращает UBlock с предустановленными свойствами
 */
export const getUBlockWithProps = <T extends TagType>(
  props: Partial<React.ComponentProps<typeof UBlock>> & { tag?: T }
) => setProps<UBlockPropsType<T>>(props as any)(UBlock)

export default UBlock
