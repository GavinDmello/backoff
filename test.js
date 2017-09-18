const BackOff = require('./backoff')
const backoff = new BackOff()

console.log(backoff.getBackoff(1))
console.log(backoff.getBackoff(5))
console.log(backoff.getBackoff(10))