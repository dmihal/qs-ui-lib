## Prerequisites

[Node.js](http://nodejs.org/) >= v4 must be installed.

## Installation

- Running `npm install` in the component's root directory will install everything you need for development.

## Demo Development Server

- `npm start` will run a development server with the style guide components at [http://localhost:6060](http://localhost:6060).

## Running Tests

- `npm test` will run the tests once.

- `npm run test:coverage` will run the tests and produce a coverage report in `coverage/`.

- `npm run test:watch` will run the tests on every change.

## Building

- `npm run build` will build the component for publishing to npm and also bundle the demo app.

- `npm run clean` will delete built resources.

## Publishing

- obtain credentials for the `qs-npm` npm user
- run `npm login`
- run `yarn build && npm publish`
