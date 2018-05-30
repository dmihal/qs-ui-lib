import shell from 'shelljs';
import fs from 'fs';
import * as jssCli from 'jss-cli'

import { GlobalTypeDefault } from './globals-for-styleguidist-render/type-base.mjs';

const result = jssCli.default.cssToJss({code: GlobalTypeDefault})

fs.writeFileSync(
  './globals-for-styleguidist-render/type-base-css2json.json',
  JSON.stringify(result)
);

