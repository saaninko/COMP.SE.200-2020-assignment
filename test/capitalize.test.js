import chai from 'chai'
import capitalize from '../src/capitalize.js'

describe('capitalize()', function() {
    it ('Should capitalize lowercase string', () => {
        chai.expect(capitalize('test')).to.deep.equal('Test');
    });
});