import chai from 'chai'
import isBoolean from '../src/isBoolean.js'

describe('isBoolean()', function() {
    it ('Should return true for true', () => {
        chai.expect(isBoolean(true)).to.deep.equal(true);
    });
});