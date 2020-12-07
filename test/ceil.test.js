import chai from 'chai'
import ceil from '../src/ceil.js'

describe('ceil()', function() {
    it ('Should round up to integer with no precision', () => {
        chai.expect(ceil(6.1,)).to.deep.equal(7);
    });
});