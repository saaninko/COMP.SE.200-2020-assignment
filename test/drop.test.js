import chai from 'chai'
import drop from '../src/drop.js'

describe('drop()', function() {
    it ('Should return the array with first item removed if n = 1', () => {
        chai.expect(drop([1, 2], 1)).to.deep.equal([2]);
    });
    it ('Should remove the first item if no n given', () => {
        chai.expect(drop([1, 2])).to.deep.equal([2]);
    });
    it ('Should remove the n first items', () => {
        chai.expect(drop([1, 2, 3, 4], 2)).to.deep.equal([3, 4]);
    });
    it ('Should return empty array for empty array', () => {
        chai.expect(drop([], 2)).to.deep.equal([]);
    });
});