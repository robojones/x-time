# x-time - timeout version of setTimeout()

[![Build Status](https://travis-ci.org/robojones/x-time.svg?branch=master)](https://travis-ci.org/robojones/x-time)

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

- time __\<Number\>__ duration of timeout in ms
- value __\<any\>__ value to resolve the promise with

Returns a promise that gets resolved with the __value__ when the __time__ has passed.

