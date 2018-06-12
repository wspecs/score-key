# score-key

Simple package to get score key value.

![npm](https://img.shields.io/npm/v/score-key.svg) ![license](https://img.shields.io/npm/l/score-key.svg) ![github-issues](https://img.shields.io/github/issues/wspecs/score-key.svg)

![nodei.co](https://nodei.co/npm/score-key.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/wspecs/score-key.svg)
![stars](https://img.shields.io/github/stars/wspecs/score-key.svg)
![forks](https://img.shields.io/github/forks/wspecs/score-key.svg)

![forks](https://img.shields.io/github/forks/wspecs/score-key.svg)

![](https://david-dm.org/wspecs/score-key/status.svg)
![](https://david-dm.org/wspecs/score-key/dev-status.svg)

## Features

- Parse text with chords

## Usage

```js
import {getKey} require('score-key');

console.log(getFlatKey(1));
console.log(getKey(1));  // One Flat
// F

console.log(getSharpKey(1));
console.log(getKey(0, 1)); // Or one Sharp
// G
```

## Install

`npm install --save score-key`


## Scripts

 - **npm run build** : `rm -rf dist && tsc`
 - **npm run test** : `mocha ./dist/test/*.js`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[@types/chai](https://www.npmjs.com/package/@types/chai) | ^4.1.3 | ✔
[@types/mocha](https://www.npmjs.com/package/@types/mocha) | ^5.2.2 | ✔
[@types/node](https://www.npmjs.com/package/@types/node) | ^10.3.2 | ✔
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.2.0 | ✔
[pythonic](https://www.npmjs.com/package/pythonic) | ^1.0.1 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains TypeScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Wendly Saintil <wendlysaintil@gmail.com> https://twitter.com//wendlysaintil

## License

 - **MIT** : http://opensource.org/licenses/MIT