import { omit } from 'lodash'
import * as React from 'react'

/**
 * Создаёт компонент, к которому будут недопущены указанные пропсы
 * @param Tag Компонент
 * @param omitProps Пропсы, которые нужно не пропустить к компоненту
 */
const createComponentWithPropsOmit = <
  WrapperPropsType extends Record<string, any>,
  TagType extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = any
>(
  Tag: TagType,
  omitProps: Array<keyof WrapperPropsType>
) => {
  const Component = (props: React.ComponentProps<TagType>) => <Tag {...(omit(props, omitProps) as any)} />

  Component.displayName = `${Tag.toString()}WithPropsOmit`

  return Component
}

export default createComponentWithPropsOmit
