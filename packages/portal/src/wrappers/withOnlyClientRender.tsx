import React, { ComponentType } from 'react'
import UConditionallyRender from '@/ui-components/UConditionallyRender'

/**
 * Рендер только на клиенте
 */
export default function withOnlyClientRender(WrappedComponent: ComponentType) {
  const hocComponent = ({ ...props }: any) => (
    <UConditionallyRender disableOnServer>
      <WrappedComponent {...props} />
    </UConditionallyRender>
  )

  hocComponent.propTypes = {}

  return hocComponent
}
