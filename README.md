# x-time
setTimeout() with native promises

[![Build Status](https://travis-ci.org/robojones/x-time.svg?branch=master)](https://travis-ci.org/robojones/x-time)
[![Test Coverage](https://codeclimate.com/github/robojones/x-time/badges/coverage.svg)](https://codeclimate.com/github/robojones/x-time/coverage)

[![bitHound Code](https://www.bithound.io/github/robojones/x-time/badges/code.svg)](https://www.bithound.io/github/robojones/x-time)
[![bitHound Overall Score](https://www.bithound.io/github/robojones/x-time/badges/score.svg)](https://www.bithound.io/github/robojones/x-time)
[![bitHound Dependencies](https://www.bithound.io/github/robojones/x-time/badges/dependencies.svg)](https://www.bithound.io/github/robojones/x-time/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/robojones/x-time/badges/devDependencies.svg)](https://www.bithound.io/github/robojones/x-time/master/dependencies/npm)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```
npm install x-time --save
```

## Example

```javascript
const xTime = require('x-time')

xTime(1000, 'one').then(value => {
  console.log(`waited ${value} second`)
})
```

You can also `await` the x-time promise:

```javascript
await xTime(1000)
```

## Function: xTime(time[, value])

- __time__ `<Number>` duration of timeout in ms
- __value__ `<any>` value to resolve the promise with

Returns a promise that gets resolved to the __value__ when the __time__ has passed.

