import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --body-background: #fff;
    --font-color: #38414b;
    --switch-color: #fdbb07;
    --hr-color: #ccc;
    --card-color: #fff;
    --logo-color: #1f242a;
    
    --container: 1000px;
    --container-text: 700px;
    --color-main: #38414b;
    --color-yellow: #fdbb07;
    --color-white: white;
    --color-bts: #283149;
    --color-clinpify: #242424;
    --color-utad: #404B69;
    --color-axel: #F73859;
    --color-book: #19191B;
    --color-news: #00818A;
    --color-contact: #23293;
    --font-base:  Arial, serif;
    --font-secondary: Verdana, sans-serif;
    --transition: 300ms ease-in-out;
  }
  [data-theme="dark"] {
    --body-background: #38414b;
    --font-color: #fff;
    --switch-color: #fdbb07;
    --hr-color: #1f2429;
    --card-color: #1f2429;
    --logo-color: #fff;
  }
html, body, div, span, object, iframe,
p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}
body {
    line-height:1;
}
article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section { 
    display:block;
}
nav ul {
    list-style:none;
}
blockquote, q {
    quotes:none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}
a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}
mark {
    background-color:#ff9;
    color:#000; 
    font-style:italic;
    font-weight:bold;
}
del {
    text-decoration: line-through;
}
abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}
table {
    border-collapse:collapse;
    border-spacing:0;
}
hr {
    display:block;
    height:1px;
    border:0;   
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}
input, select {
    vertical-align:middle;
}
*{
    box-sizing: border-box;
}

@keyframes grow {
  from {
    box-shadow: 2vmin 2vmin var(--switch-color), -2vmin -2vmin var(--switch-color), 0 2.5vmin var(--switch-color), 0 -2.5vmin var(--switch-color), -2.5vmin 0 var(--switch-color), 2.5vmin 0 var(--switch-color), 2vmin -2vmin var(--switch-color), -2vmin 2vmin var(--switch-color);
  }
}
body{
  background-color:var(--body-background);
  font-family: var(--font-base);
  color: var(--font-color);
  font-size: 16px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color var(--transition);
  background-color:#333;
  color:white;
}
h1,h2,h3,h4{
  font-family: var(--font-secondary);
}
ul{
  list-style: none;
}
p,li{
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
}
a{
  text-decoration: none;
  color: var(--color-yellow);
}
strong{
  color: var(--color-yellow);
}
`;

export default GlobalStyle;
