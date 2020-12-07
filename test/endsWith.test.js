import chai from 'chai'
import endsWith from '../src/endsWith.js'

describe('endsWith()', function() {
    it ('Should return true if the given string ends with the given char', () => {
        chai.expect(endsWith('abc', 'c')).to.deep.equal(true);
    });
    it ('Should return true if the given char in the tail -n', () => {
        chai.expect(endsWith('abc', 'b', 2)).to.deep.equal(true);
    });
    it ('Returns false if string doesnt end wiht the given char', () => {
        chai.expect(endsWith('abc', 'b')).to.deep.equal(false);
    });
    it ('Returns false if string doesnt end wiht the given char', () => {
        chai.expect(endsWith('abc', 'x', 2)).to.deep.equal(false);
    });
});