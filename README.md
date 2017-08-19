# x-time
setTimeout() with native promises

[![Build Status](https://travis-ci.org/robojones/x-time.svg?branch=master)](https://travis-ci.org/robojones/x-time)
[![Test Coverage](https://codeclimate.com/github/robojones/x-time/badges/coverage.svg)](https://codeclimate.com/github/robojones/x-time/coverage)
[![Issue Count](https://codeclimate.com/github/robojones/x-time/badges/issue_count.svg)](https://codeclimate.com/github/robojones/x-time)

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

