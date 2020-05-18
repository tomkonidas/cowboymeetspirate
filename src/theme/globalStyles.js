import { createGlobalStyle } from "styled-components"

import "normalize.css"

const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after{box-sizing:border-box;}
    html {height: 100%;}
    a{text-decoration:none; color:inherit; cursor:pointer;font-weight: 700;}
    button{background-color:transparent; color:inherit; border-width:0; padding:0; cursor:pointer;}
    figure{margin:0;}
    input::-moz-focus-inner {border:0; padding:0; margin:0;}
    ul, ol, dd{margin:0; padding:0; list-style:none;}
    h1, h2, h3, h4, h5, h6{margin:0; font-size:inherit; font-weight:inherit;font-family: 'biorhyme'}
    p{margin:0;}
    cite {font-style:normal;}
    fieldset{border-width:0; padding:0; margin:0;}

    body{
        height: 100%;
        font-family: 'space-mono',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.3;
        color: #222;
    }
    h1{
        font-size: 1.5rem;
    }
    h2 {
        font-size: 1.25rem;
    }
    h3 {
        font-size: 1.125rem;
    }

    @font-face {
        font-family: "Streamster";
        src: url("../../static/fonts/Streamster.woff2")   format("woff2");
    }
    ::selection {
        background: #FCDC15; 
    }
`

export default GlobalStyle
