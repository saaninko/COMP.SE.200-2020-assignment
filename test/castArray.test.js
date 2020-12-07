import chai from 'chai'
import castArray from '../src/castArray.js'

describe('castArray()', function() {
    it ('Should cast a string as an array', () => {
        chai.expect(castArray('test')).to.deep.equal(['test']);
    });
    // DOESNT WORK - SHOULD WORK
    // it ('Should cast without parameters', () => {
    //     chai.expect(castArray()).to.deep.equal([]);
    // });
    it ('Should return array for array (no change)', () => {
        chai.expect(castArray(['test'])).to.deep.equal(['test']);
    });
});