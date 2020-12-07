import chai from 'chai'
import slice from '../src/slice.js'

describe('slice()', function() {
    it ('Slice with parameter 1 removes the first item', () => {
        chai.expect(slice([1, 2, 3], 1)).to.deep.equal([2, 3]);
    });
    it ('Slice with parameter 1, 1 returns empty array', () => {
        chai.expect(slice([1, 2, 3], 1, 1)).to.deep.equal([]);
    });
    it ('Slice empty array returns empty array', () => {
        chai.expect(slice([], 1, 1)).to.deep.equal([]);
    });
});