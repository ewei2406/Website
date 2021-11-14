import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

    * {
        --body: ${({ theme }) => theme.body};
        --text: ${({ theme }) => theme.text};
        --bodyLight: ${({ theme }) => theme.bodyLight};

    }

    body {
        color: var(--text);
        font-family: 'Open Sans', sans-serif;

        /* background-color: #ffaaaa55;
        height: 2000px; */

        transition: all 0.15s linear;

        padding: 20px;
        width: 100%;
        max-width: 1000px;
    }

    html {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--body);

        transition: all 0.15s linear;


        background-image:
            linear-gradient(var(--bodyLight) 0.2px, transparent 1px),
            linear-gradient(90deg, var(--bodyLight) 0.2px, transparent 1px);
        
        background-size: 100px 100px;
        background-position: 50px 50px;
        background-attachment: fixed;

    }
`