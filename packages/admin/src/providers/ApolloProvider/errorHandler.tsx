import React, { ReactElement } from 'react'
import { onError } from '@apollo/client/link/error'
import { notification } from 'antd'

const errorHandler = onError(({ graphQLErrors, operation }) => {
  if (graphQLErrors) {
    const disableErrorHandler = operation.getContext()?.disableErrorHandler === true
    graphQLErrors.forEach(({ message, extensions }) => {
      const errors: string[] = extensions?.exception?.errors?.map((e: any) => e?.message).filter(Boolean) || []
      const errorsIsSameMessage = errors.length === 1 && errors[0] === message
      let formattedMessage: string | ReactElement = message

      if (errors.length > 0 && !errorsIsSameMessage) {
        formattedMessage = (
          <>
            <div>{formattedMessage}:</div>
            {errors.map((e) => (
              <div key={e}>{e}</div>
            ))}
          </>
        )
      }

      if (!disableErrorHandler)
        notification.error({
          message: formattedMessage,
        })
    })
  }
})

export default errorHandler
