import chai from 'chai'
import every from '../src/every.js'

describe('every()', function() {
    it ('Should return false if array contains null', () => {
        chai.expect(every([1, false, null], Boolean)).to.deep.equal(false);
    });
});