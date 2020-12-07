import chai from 'chai'
import isArrayLikeObject from '../src/isArrayLikeObject.js'

describe('isArrayLikeObject()', function() {
    it ('Should return true for array', () => {
        chai.expect(isArrayLikeObject([1, 2, 3])).to.deep.equal(true);
    });
});