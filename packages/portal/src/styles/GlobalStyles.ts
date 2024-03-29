import { createGlobalStyle } from 'styled-components'
import { transitions } from 'polished'
import { space } from 'styled-system'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: bold;
    src: url('https://fonts.cdnfonts.com/s/16219/Gilroy-Bold.woff') format('woff');
  }
  @font-face {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    src: url('https://fonts.cdnfonts.com/s/16219/Gilroy-Bold.woff') format('woff');
  }
  @font-face {
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 800;
      src: url('https://fonts.cdnfonts.com/s/16219/Gilroy-Heavy.woff') format('woff');
  }
  @font-face {
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 300;
      src: url('https://fonts.cdnfonts.com/s/16219/Gilroy-Light.woff') format('woff');
  }
  @font-face {
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 500;
      src: url('https://fonts.cdnfonts.com/s/16219/Gilroy-Medium.woff') format('woff');
  }
  @font-face {
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 400;
      src: url('https://fonts.cdnfonts.com/s/16219/Gilroy-Regular.woff') format('woff');
  }

  html {
    background-color: #F8F8F8;
    font-family: ${({ theme }) => theme.fonts.primary};
    letter-spacing: 0.02em;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0 0 95px;
    overflow-x: hidden;

    ${(props) =>
      space({
        ...props,
        pb: props.theme.blocksSpace,
        mb: props.theme.bottomBar.height,
      })}
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

  svg {
    fill: #000;
  }

  /* TODO: @media (prefers-reduced-motion) {
    * {
      transition: none !important;
    }
  } */
`

export default GlobalStyles
