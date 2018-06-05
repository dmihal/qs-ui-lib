import fs from 'fs';
import * as jssCli from 'jss-cli'

const cssToJss = jssCli.default.cssToJss
const folder = './globals-jss-compiled/'

import { GlobalResetBase } from './globals/reset-base.mjs';
const resetResult = cssToJss({code: GlobalResetBase})
fs.writeFileSync(
  folder+'reset-base-css2json.json',
  JSON.stringify(resetResult)
);

import { GlobalFontsBase } from './globals/fonts-base.mjs';
const fontsResult = cssToJss({code: GlobalFontsBase})
fs.writeFileSync(
  folder+'fonts-base-css2json.json',
  JSON.stringify(fontsResult)
);

import { GlobalDefaultBase } from './globals/default-base.mjs';
const defaultResult = cssToJss({code: GlobalDefaultBase})
fs.writeFileSync(
  folder+'default-base-css2json.json',
  JSON.stringify(defaultResult)
);

import { GlobalTypeBase } from './globals/type-base.mjs';
const typeResult = cssToJss({code: GlobalTypeBase})
fs.writeFileSync(
  folder+'type-base-css2json.json',
  JSON.stringify(typeResult)
);