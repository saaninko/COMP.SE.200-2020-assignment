import chai from 'chai'
import endsWith from '../src/endsWith.js'

describe('endsWith()', function() {
    it ('Should return true if the given string ends with the given char', () => {
        chai.expect(endsWith('abc', 'c')).to.deep.equal(true);
    });
});