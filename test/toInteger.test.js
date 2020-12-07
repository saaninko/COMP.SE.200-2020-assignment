import chai from 'chai'
import toInteger from '../src/toInteger.js'

describe('toInteger()', function() {
    it ('Return nearest integer for float', () => {
        chai.expect(toInteger(3.2)).to.deep.equal(3);
    });
});