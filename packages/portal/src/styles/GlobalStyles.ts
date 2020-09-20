import { createGlobalStyle } from 'styled-components'
import { transitions } from 'polished'

const GlobalStyles = createGlobalStyle`
  html {
    background-color: #F8F8F8;
    font-family: ${({ theme }) => theme.fonts.primary};
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  *, :after, :before {
    font-family: ${({ theme }) => theme.fonts.primary};
    box-sizing: border-box;
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
