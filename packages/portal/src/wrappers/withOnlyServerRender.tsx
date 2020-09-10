import React, { ComponentType } from 'react'
import UConditionallyRender from '@/ui-components/UConditionallyRender'

/**
 * Рендер только на сервере
 */
export default function withOnlyClientRender(WrappedComponent: ComponentType) {
  const hocComponent = ({ ...props }: any) => (
    <UConditionallyRender disableOnClient>
      <WrappedComponent {...props} />
    </UConditionallyRender>
  )

  hocComponent.propTypes = {}

  return hocComponent
}
