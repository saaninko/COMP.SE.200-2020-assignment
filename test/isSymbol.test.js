import chai from 'chai'
import isSymbol from '../src/isSymbol.js'

describe('isSymbol()', function() {
    it ('Return false for string', () => {
        chai.expect(isSymbol('a')).to.deep.equal(false);
    });
});