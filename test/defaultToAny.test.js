import chai from 'chai'
import defaultToAny from '../src/defaultToAny.js'

describe('defaultToAny()', function() {
    it ('Returns first default value if first value is undefined', () => {
        chai.expect(defaultToAny(undefined, 10, 6)).to.deep.equal(10);
    });
});