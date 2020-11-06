import React from 'react'
import withApollo from 'next-with-apollo'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import introspectionResult from '@/gql/__generated__/introspection-result'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { TypedTypePolicies } from './__generated__/apollo-helpers'
import { clientSchemaTypePolicies } from './cache'

const { APOLLO_URL } = process.env

const typePolicies: TypedTypePolicies = {
  ...clientSchemaTypePolicies,
}

const cache = new InMemoryCache({
  possibleTypes: introspectionResult.possibleTypes,
  typePolicies,
})

/* eslint-disable react/display-name, @typescript-eslint/ban-ts-comment */
export default withApollo(
  ({ initialState, ctx }) =>
    new ApolloClient({
      uri: APOLLO_URL,
      ssrMode: Boolean(ctx),
      cache: cache.restore(initialState || {}),
    }),
  {
    // @ts-ignore
    render: ({ Page, props }: AppProps) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      )
    },
  }
)
