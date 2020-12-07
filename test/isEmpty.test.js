import chai from 'chai'
import isEmpty from '../src/isEmpty.js'

describe('isEmpty()', function() {
    it ('Should return true for null', () => {
        chai.expect(isEmpty(null)).to.deep.equal(true);
    });
});