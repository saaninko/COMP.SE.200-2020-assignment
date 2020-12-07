import chai from 'chai'
import camelCase from '../src/camelCase.js'

describe('camelCase()', function() {
    it ('Should convert two words separated by space to one camelcase string', () => {
        chai.expect(camelCase('Foo Bar')).to.deep.equal('fooBar');
    });
});