import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }

  body {
    background-color: #fafafa;
    font-size: 15px;
    font-family: Raleway;
  }

  h2 {
    display: flex;
    justify-content: center;
    margin: 30px 0;
    color: #84878a;
    font-weight: 600;
    font-size: 30px;
  }
`;
