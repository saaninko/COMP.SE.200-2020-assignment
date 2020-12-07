import chai from 'chai'
import toNumber from '../src/toNumber.js'

describe('toNumber()', function() {
    it ('Returns the number in a string', () => {
        chai.expect(toNumber('3.2')).to.deep.equal(3.2);
    });
    it ('Returns 0 for false', () => {
        chai.expect(toNumber(false)).to.deep.equal(0);
    });
    it ('Returns the number if it`s a number', () => {
        chai.expect(toNumber(3.2)).to.deep.equal(3.2);
    });
    it ('Returns infinity for infinity', () => {
        chai.expect(toNumber(Infinity)).to.deep.equal(Infinity);
    });
});