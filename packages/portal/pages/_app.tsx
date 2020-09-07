import React from 'react'
import '../styles/globals.css'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ApolloProvider } from '@apollo/client'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from '@/wrappers/withApollo'

function MyApp({ Component, pageProps, apollo }: AppProps) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default withApollo(MyApp, { getDataFromTree })
