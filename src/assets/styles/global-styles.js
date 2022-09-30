import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
     
        @media only screen and (min-width: 500px) {
            font-size: 16px;
        }
    html, body, #root {
        height: 100%;
        background-color: #111;
        margin: 0;
        padding: 0;
        font-size: 14px;
    }

    body {
        font-family: "Poppins";
    }
`;

export default GlobalStyle;
