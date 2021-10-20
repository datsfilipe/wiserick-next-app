import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-size: 62.5%;
    background-color: ${props => props.theme.bg}
  }
  h1, button {
    font-family: 'Roboto', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`