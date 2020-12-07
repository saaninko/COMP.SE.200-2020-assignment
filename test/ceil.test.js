import chai from 'chai'
import ceil from '../src/ceil.js'

describe('ceil()', function() {
    it ('Should round up to integer with no precision', () => {
        chai.expect(ceil(6.1)).to.deep.equal(7);
    });
    it ('Should round up to decimal with precision', () => {
        chai.expect(ceil(6.123, 2)).to.deep.equal(6.13);
    });
    it ('Should round up to negative integer with no precision', () => {
        chai.expect(ceil(-6.1)).to.deep.equal(-6);
    });
    it ('Should round up to negative decimal with precision', () => {
        chai.expect(ceil(-6.123, 2)).to.deep.equal(-6.12);
    });
});