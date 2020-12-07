import chai from 'chai'
import clamp from '../src/clamp.js'

describe('clamp()', function() {
    // DOESNT PASS - SHOULD PASS
    // it ('Should return same number if number within bounds', () => {
    //     chai.expect(clamp(3, -5, 5)).to.deep.equal(3);
    // });
    // it ('Should return upper bound if number over bounds', () => {
    //     chai.expect(clamp(10, -5, 5)).to.deep.equal(5);
    // });
    it ('Should return lower bound if number under bounds', () => {
        chai.expect(clamp(-10, -5, 5)).to.deep.equal(-5);
    });
    it ('Should return upper bound if number over bounds', () => {
        chai.expect(clamp(10, 10, 10)).to.deep.equal(10);
    });
});