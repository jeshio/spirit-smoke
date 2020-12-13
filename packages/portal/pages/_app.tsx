import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ApolloProvider } from '@apollo/client'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from '@/gql/withApollo'
import GlobalStyles from '@/styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import theme from '@/styles/theme'
import CHeader from '@/containers/CHeader'
import CProductCategoriesList from '@/containers/CProductCategoriesList'

function MyApp({ Component, pageProps, apollo }: AppProps) {
  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>Spirit Smoke HM Market</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;400;500;700;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <CHeader />
        <main>
          <Component {...pageProps} />
        </main>
        <CProductCategoriesList />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default withApollo(MyApp, { getDataFromTree })
