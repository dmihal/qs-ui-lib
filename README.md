# Quantstamp Component Library and Style Guide
powered by webpack flavored React Styleguidist

![](https://d3vv6lp55qjaqc.cloudfront.net/items/0U313M3L0p120g2Y1y3J/Image%202016-04-12%20at%207.25.03%20PM.png)

This repo is configured to be toolset friendly with [Next.js](https://github.com/zeit/next.js/) using [styled-jsx](https://github.com/zeit/styled-jsx) for the CSS. 

The idea being to clone down this repo into your project's component folder to make use of company wide React components.

#### How to import into a Next.js project:
From your Next.js project folder
```bash
cd components
git clone git://github.com/quantstamp/qsp-ui-library.git
```

Then to source the component in your page or top level component
```js
// File: pages/mypage.js
import MyComponent from '../components/qsp-up-library/MYCOMPONENT'

|
|
|

<MyComponent someprop="someVal">
```

------------

How to start locally for development:

```
git clone git://github.com/quantstamp/qsp-ui-library.git
cd qsp-ui-library
npm i
npx styleguidist server
```

then open [http://localhost:6060](http://localhost:6060) in your browser.


