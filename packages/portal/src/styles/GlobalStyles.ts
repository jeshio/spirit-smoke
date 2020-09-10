import { createGlobalStyle } from 'styled-components'
import { transitions } from 'polished'

const GlobalStyles = createGlobalStyle`
  html {
    background-color: #F8F8F8;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.linkColor.base};
    ${transitions(['color'], '0.1s linear')};

    &:hover { 
      color: ${({ theme }) => theme.colors.linkColor.hover};
    }
  }
`

export default GlobalStyles
