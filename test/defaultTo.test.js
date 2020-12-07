import chai from 'chai'
import defaultTo from '../src/defaultTo.js'

describe('defaultTo()', function() {
    it ('Returns default value if given value is undefined', () => {
        chai.expect(defaultTo(undefined, 10)).to.deep.equal(10);
    });
});