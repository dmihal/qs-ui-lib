import fs from 'fs'

import { LayoutSizes, Typography, Colors, MarginPaddingSize } from '../vars.mjs';
const fontFaces = fs.readFileSync('assets/fonts/gtwalsheim/stylesheet.css', 'utf8')

export const GlobalFontsBase = `
  ${ fontFaces }
`