import { LayoutSizes, Typography as Type, Colors, MarginPaddingSize } from '../vars.mjs';

export const GlobalTypeDefault = `
  
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

  * {
    color: ${Colors.Mirage};
    font-family: ${Type.typePrimaryStack};
    font-size: ${Type.fontSize[3]};
  }

  h1, h2, h3, h4 {
    margin-bottom: ${MarginPaddingSize[2]};
  }
  p {
    margin-bottom: ${MarginPaddingSize[3]};
  }

  h1 {
    font-weight: ${Type.typePrimaryWeight.regular};
    font-size: ${Type.fontSize[0]};
  }
  h2 {
    font-weight: ${Type.typePrimaryWeight.regular};
    font-size: ${Type.fontSize[1]};
  }
  h3 {
    font-weight: ${Type.typePrimaryWeight.medium};
    font-size: ${Type.fontSize[2]};
  }
  h4 {
    font-weight: ${Type.typePrimaryWeight.medium};
    font-size: ${Type.fontSize[3]};
  }
  p {
    font-weight: ${Type.typePrimaryWeight.regular};
    font-size: ${Type.fontSize[3]};
  }
  label {
    font-weight: ${Type.typePrimaryWeight.medium};
    font-size: ${Type.fontSize[4]};
  }
  small {
    font-weight: ${Type.typePrimaryWeight.light};
    font-size: ${Type.fontSize[5]};
  }
`