import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

// 폰트 추가
@font-face {
    font-family: 'DungGeunMo';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

// 폰트 변경 (안되는 부분들은 따로 styled-Components에 추가.)
body{
    font-family: 'DungGeunMo', sans-serif;
    color-scheme: light dark;
    color: #fff;
    background-color: #222;
}
`;

export default GlobalStyles;
