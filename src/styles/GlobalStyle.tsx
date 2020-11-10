import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'


const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --white: #EEFBFB;
    --light: #007CC7;
    --lighter: #4DA8DA;
    --dark: #12232E;
    --darker: #203647;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background: var(-white);
    overflow: hidden;
  }
`

export default GlobalStyle