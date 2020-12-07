import chai from 'chai'
import eq from '../src/eq.js'

describe('eq()', function() {
    it ('Should return true for equal objects', () => {
        chai.expect(eq(1, 1)).to.be.true;
    });
    it ('Should return false for unequal objects', () => {
        chai.expect(eq('1', 1)).to.be.true;
    });
    it ('Should return false for unequal falsey objects', () => {
        chai.expect(eq(undefined, null)).to.be.true;
    });
});