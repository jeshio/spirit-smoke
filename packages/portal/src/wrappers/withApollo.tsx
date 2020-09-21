import React from 'react'
import withApollo from 'next-with-apollo'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import introspectionResult from '@/gql/__generated__/introspection-result'
import { AppProps } from 'next/dist/next-server/lib/router/router'

const { APOLLO_URL } = process.env

/* eslint-disable react/display-name, @typescript-eslint/ban-ts-comment */
export default withApollo(
  ({ initialState, ctx }) =>
    new ApolloClient({
      uri: APOLLO_URL,
      ssrMode: Boolean(ctx),
      cache: new InMemoryCache({
        possibleTypes: introspectionResult.possibleTypes,
      }).restore(initialState || {}),
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
