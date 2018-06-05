import fs from 'fs'

import { LayoutSizes, Typography, Colors, MarginPaddingSize } from '../vars.mjs';
const sanitize = fs.readFileSync('node_modules/sanitize.css/sanitize.css', 'utf8')

export const GlobalResetBase = `
  ${ sanitize }
`