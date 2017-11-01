const BackOff = require('./backoff')
const backoff = new BackOff()
const chai = require('chai')

describe('Testing backoff algorithm', () => {
  it('backoff test', (done) => {
  	chai.should()
  	var val = backoff.getBackoff(5)
  	val.should.be.a('number')
  	done()
  })
})