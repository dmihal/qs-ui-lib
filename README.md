# Quantstamp Component Library and Style Guide
powered by webpack flavored React Styleguidist and NWB

[![npm package][npm-badge]][npm]
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/qs-ui-library

<!-- [![Coveralls][coveralls-badge]][coveralls]
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/quantstamp/qs-ui-library -->

![](https://quantstamp.com/assets/logo-website-dc3b71626c62e8a01d8767a293e104e968c43940060c9a0f7ca2d5e258c29def.svg)
![](https://d3vv6lp55qjaqc.cloudfront.net/items/0U313M3L0p120g2Y1y3J/Image%202016-04-12%20at%207.25.03%20PM.png)

#### How to import into a React project:

From your React.js project folder
```bash
npm i qs-ui-library --save
# or
yarn add qs-ui-library
```

Then to source the component in your page or top level component
```js
// File: pages/mypage.js
import { MyComponent } from 'qs-ui-library'

|
|

<MyComponent someprop="someVal">
```

------------

How to start locally for development:
(pre-reqs: node/npm, nvm, git)
```
git clone git://github.com/quantstamp/qs-ui-library.git
cd qs-ui-library
nvm use
npm i
npm start
```

then open [http://localhost:6060](http://localhost:6060) in your browser.

