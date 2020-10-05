import { createGlobalStyle } from 'styled-components'

/* eslint-disable @typescript-eslint/dot-notation */
const GlobalStyles = createGlobalStyle`
  @media (max-width: ${({ theme }) => theme.breakpoints['sm']}) {
    .ant-pro-page-container-children-content {
      margin: 24px 0;
    }
  }
`

export default GlobalStyles
