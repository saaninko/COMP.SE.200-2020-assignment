import chai from 'chai'
import isTypedArray from '../src/isTypedArray.js'

describe('isTypedArray()', function() {
    it ('Return false for regular array', () => {
        chai.expect(isTypedArray([])).to.deep.equal(false);
    });
    it ('Returns true for Uint8Array', () => {
        chai.expect(isTypedArray(new Uint8Array)).to.deep.equal(true);
    });
});