import React, { ComponentType } from 'react'

/**
 * Оборачивает компонент параметрами в приоритете important
 */
export default function setProps<ComponentProps = any>(propsOverride: Partial<ComponentProps>) {
  return (WrappedComponent: ComponentType<ComponentProps>): ComponentType<ComponentProps> => {
    const hocComponent = ({ ...props }: any) => <WrappedComponent {...props} {...propsOverride} />

    hocComponent.propTypes = {}

    return hocComponent
  }
}
