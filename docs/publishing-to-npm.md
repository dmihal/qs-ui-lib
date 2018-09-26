# Publishing to NPM

## Getting Setup

1. obtain username/password for the quanstamp npm account from austin, alex, or sebastian
2. run `npm login` in a shell (using login info obtained in step 1)

## Publishing changes

1. make your change in the `qs-ui-library` repo; verify that they look okay by running `yarn start` in the repo
2. increment the version number in line 3 of the qs-ui-library's `package.json`
3. run `npm publish`
4. in the downstream library in which you wish to use the new changes, increment the version number in `client/package.json` of the `qs-ui-lib` dependency to match the version you just incremented upstream to be in step 2
5. run `yarn install` in the downstream library to install the new dependency
