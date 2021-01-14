import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ApolloProvider } from '@apollo/client'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from '@/hocs/withApollo'
import withThemeProvider from '@/hocs/withThemeProvider'
import GlobalStyles from '@/styles/GlobalStyles'
import Head from 'next/head'
import CHeader from '@/containers/CHeader'
import CProductCategoriesList from '@/containers/CProductCategoriesList'
import CMain from '@/containers/CMain'

function App({ Component, pageProps, apollo }: AppProps) {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Spirit Smoke HM Market</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <GlobalStyles />
      <CHeader />
      <CMain>
        <Component {...pageProps} />
      </CMain>
      <CProductCategoriesList />
    </ApolloProvider>
  )
}

export default withThemeProvider(withApollo(App, { getDataFromTree }))
