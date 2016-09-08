
/*global describe*/
/*global it*/

import chai   from 'chai'
import assert from 'assert'

let expect = chai.expect
let should = chai.should()

describe('Perform Unit Testing', () => {
  describe('It should perform heartbeat', () => {

    it('should pass using expect', () => {
      expect(true).to.be.true
    })

    it('should pass using assertion', () => {
        assert.equal(true,true);
    })

    it('should pass using should', () => {
        true.should.be.true;
    })

  });
});
