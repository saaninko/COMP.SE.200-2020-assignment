import chai from 'chai'
import difference from '../src/difference.js'

describe('difference()', function() {
    it ('Should return the differing value when given two arrays', () => {
        chai.expect(difference([1, 2], [3, 1])).to.deep.equal([2]);
    });
});