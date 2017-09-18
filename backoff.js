/*
	Simple BackOff Algorithm 
	Author : Gavin D'mello 
	References : MDN
*/

class Backoff {
	constructor(opts) {
		opts = opts || {}
		this.rtt = opts.rtt || 1000
	}

	getBackoff(collisions) {
		let k = getRandomInteger(0, Math.pow(2, collisions) - 1)
		return this.rtt * k
	}
}

/*
	Example from MDN to create random numbers within fixed
	intervals
*/
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = Backoff