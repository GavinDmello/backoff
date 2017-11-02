# Exponential backoff algorithm

This is a very simple implementation of the expoenential backoff algorithm.
It returns the amount of time after which the node should retry to transmit. You will have to set the delay yourself.

# Installation

```
npm install ebackoff
```

## Function

- getBackoff(collisions)

## Example usage

```js
	const BackOff = require('./backoff')
	const backoff = new BackOff()

	console.log(backoff.getBackoff(1))
	console.log(backoff.getBackoff(5))
	console.log(backoff.getBackoff(10))
```


## License 

MIT