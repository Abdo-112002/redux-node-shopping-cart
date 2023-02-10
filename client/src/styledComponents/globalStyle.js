

import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --min-color : orange;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body , #root{
        font-family: sans-serif;
        height: 100vh;
        min-height: 100vh;
    }
`;

