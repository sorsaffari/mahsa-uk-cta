import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        background-color: #111;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Poppins";
    }
`;

export default GlobalStyle;
