import React, { useEffect, useState, FC } from 'react'

export interface IUConditionallyRenderProps {
  /** Не отображать содержимое на клиенте */
  disableOnClient?: boolean
  /** Не отображать содержимое на сервере */
  disableOnServer?: boolean
}

/**
 * Рендер дочернего компонента только на сервере или только на клиенте
 */
const UConditionallyRender: FC<IUConditionallyRenderProps> = ({ disableOnServer, disableOnClient, children }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted && disableOnServer) {
    return null
  }

  if (isMounted && disableOnClient) {
    return null
  }

  return children as React.ReactElement
}

export default UConditionallyRender
