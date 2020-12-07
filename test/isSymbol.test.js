import chai from 'chai'
import isSymbol from '../src/isSymbol.js'

describe('isSymbol()', function() {
    it ('Return false for string', () => {
        chai.expect(isSymbol('a')).to.deep.equal(false);
    });
    it ('Return true for symbol', () => {
        chai.expect(isSymbol(Symbol.iterator)).to.deep.equal(true);
    });
});