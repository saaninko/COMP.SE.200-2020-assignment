import chai from 'chai'
import castArray from '../src/castArray.js'

describe('castArray()', function() {
    it ('Should cast a string as an array', () => {
        chai.expect(castArray('test')).to.deep.equal(['test']);
    });
});