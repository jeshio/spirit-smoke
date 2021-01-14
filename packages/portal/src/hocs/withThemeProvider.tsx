import React, { ComponentClass } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

const withThemeProvider = (WrappedComponent: ComponentClass<any, any>) => {
  const hocComponent = ({ ...props }) => (
    <ThemeProvider theme={theme}>
      <WrappedComponent {...props} />
    </ThemeProvider>
  )

  return hocComponent
}

export default withThemeProvider
