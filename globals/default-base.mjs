import { LayoutSizes, Typography, Colors, MarginPaddingSize } from '../vars.mjs';

export const GlobalDefaultBase = `
  * { box-sizing: border-box; }
        
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  html,body {
    height: 100%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  a { cursor: pointer; }

  figure { margin: 0; }
`