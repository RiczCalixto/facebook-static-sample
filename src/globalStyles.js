import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    html, body, #app {
      height: 100%;
    }

    body{
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      background: #e0e0e0;
      color: #3e3e3e;
      font-family: Arial, Helvetica, sans-serif;
    }
    header{
        background: #4a90e2;
        nav{
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
          padding: 0 42px;
          color: #fff;
          min-width: 960px;
        }
      }
  }
`;

export default GlobalStyles;
