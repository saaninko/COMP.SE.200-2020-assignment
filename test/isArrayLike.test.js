import chai from 'chai'
import isArrayLike from '../src/isArrayLike.js'

describe('isArrayLike()', function() {
    it ('Returns true for an array', () => {
        chai.expect(isArrayLike([1, 2, 3])).to.deep.equal(true);
    });
});