import * as React from 'react'
import { ApolloProvider as OriginalApolloProvider } from '@apollo/client'
import createApolloClient from './createApolloClient'

const apolloClient = createApolloClient()

const ApolloProvider: React.FunctionComponent = (props) => {
  return <OriginalApolloProvider client={apolloClient}>{props.children}</OriginalApolloProvider>
}

export default ApolloProvider
