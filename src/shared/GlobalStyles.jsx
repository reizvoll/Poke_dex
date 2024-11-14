import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
     font-family: 'DungGeunMo';
     src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}

body{
    font-family: 'DungGeunMo', sans-serif;
    color-scheme: light dark;
    color: #fff;
    background-color: #222;
}
`;

export default GlobalStyles;
