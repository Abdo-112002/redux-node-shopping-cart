

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
    body {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

