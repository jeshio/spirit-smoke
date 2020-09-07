import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ApolloProvider } from '@apollo/client'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from '@/wrappers/withApollo'
import GlobalStyles from '@/styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import theme from '@/styles/theme'

function MyApp({ Component, pageProps, apollo }: AppProps) {
  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>Spirit Smoke HM Market</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default withApollo(MyApp, { getDataFromTree })
