import chai from 'chai'
import isBuffer from '../src/isBuffer.js'

describe('isBuffer()', function() {
    it ('Should return false for array', () => {
        chai.expect(isBuffer([1, 2, 3])).to.deep.equal(false);
    });
});