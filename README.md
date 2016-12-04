# x-time - timeout version of setTimeout()

## Example


```
const xTime = require('x-time');

xTime(1000, 'one').then(value => {
    console.log(`waited ${value} second`);
});
```

## Function: xTime(time[, value])

- time __\<Number\>__ duration of timeout in ms
- value __\<any\>__ value to resolve the promise with

Returns a promise that gets resolved with the __value__ when the __time__ has passed.

