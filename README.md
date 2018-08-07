# Quantstamp Component Library and Style Guide
powered by webpack flavored React Styleguidist
![](https://quantstamp.com/assets/logo-website-dc3b71626c62e8a01d8767a293e104e968c43940060c9a0f7ca2d5e258c29def.svg)
![](https://d3vv6lp55qjaqc.cloudfront.net/items/0U313M3L0p120g2Y1y3J/Image%202016-04-12%20at%207.25.03%20PM.png)

#### How to import into a Next.js project:

*NOTE: THIS WILL BE DEPRECATED FOR NPM SOON*

From your Next.js project folder
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
|

<MyComponent someprop="someVal">
```

------------

How to start locally for development:
(pre-reqs: node/npm, nvm, git)
```
nvm use
git clone git://github.com/quantstamp/qs-ui-library.git
cd qs-ui-library
npm i
npx styleguidist server
```

then open [http://localhost:6060](http://localhost:6060) in your browser.


