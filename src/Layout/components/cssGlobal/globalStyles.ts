import { css } from "@emotion/react";

export const GlobalStyles  = () => css`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    min-width: 320px;
  }

  * {
    box-sizing: border-box;
  }
`;