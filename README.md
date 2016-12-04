# x-time - timeout version of setTimeout()

## Example


```
const xTime = require('x-time');

xTime(1000).then(() => {
    console.log('waited one second');
});
```

## xTime(time)

- time __\<Number\>__ duration of timeout in ms

Returns a promise that gets resolved when the __time__ has passed.

