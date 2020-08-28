import React from 'react'
import * as H from 'history'
import { ApolloError } from '@apollo/client'

export interface ExceptionProps<
  L = {
    to: H.LocationDescriptor
    href?: H.LocationDescriptor
    replace?: boolean
    innerRef?: (node: HTMLAnchorElement | null) => void
  }
> {
  type?: '403' | '404' | '500'
  title?: React.ReactNode
  desc?: React.ReactNode
  img?: string
  actions?: React.ReactNode
  linkElement?: string | React.ComponentType<L>
  style?: React.CSSProperties
  className?: string
  backText?: React.ReactNode
  redirect?: string
  apolloError?: ApolloError
}
