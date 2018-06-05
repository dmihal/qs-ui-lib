import { LayoutSizes, Typography, Colors, MarginPaddingSize } from '../vars.mjs';

export const GlobalTypeBase = `
  * {
    color: ${Colors.Mirage};
    font-family: ${Typography.typePrimaryStack} !important;
    font-size: ${Typography.fontSize[3]};
  }
  h1, h2, h3, h4 {
    margin-bottom: ${MarginPaddingSize[2]};
  }
  p {
    margin-bottom: ${MarginPaddingSize[3]};
  }
  h1 {
    font-weight: ${Typography.typePrimaryWeight.regular};
    font-size: ${Typography.fontSize[0]};
  }
  h2 {
    font-weight: ${Typography.typePrimaryWeight.regular};
    font-size: ${Typography.fontSize[1]};
  }
  h3 {
    font-weight: ${Typography.typePrimaryWeight.medium};
    font-size: ${Typography.fontSize[2]};
  }
  h4 {
    font-weight: ${Typography.typePrimaryWeight.medium};
    font-size: ${Typography.fontSize[3]};
  }
  p {
    font-weight: ${Typography.typePrimaryWeight.regular};
    font-size: ${Typography.fontSize[3]};
  }
  label {
    font-weight: ${Typography.typePrimaryWeight.medium};
    font-size: ${Typography.fontSize[4]};
  }
  small {
    font-weight: ${Typography.typePrimaryWeight.light};
    font-size: ${Typography.fontSize[5]};
  }
`