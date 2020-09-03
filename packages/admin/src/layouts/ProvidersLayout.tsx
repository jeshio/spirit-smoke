import * as React from 'react'
import ErrorsHandlerProvider from '@/providers/ErrorsHandlerProvider'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import GlobalStyles from '@/styles/GlobalStyles'
import ApolloProvider from '../providers/ApolloProvider'

interface IProvidersLayoutProps {}

const ProvidersLayout: React.FunctionComponent<IProvidersLayoutProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorsHandlerProvider>
        <ApolloProvider>{props.children}</ApolloProvider>
      </ErrorsHandlerProvider>
    </ThemeProvider>
  )
}

export default ProvidersLayout
