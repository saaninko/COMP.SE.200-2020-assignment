import chai from 'chai'
import isArguments from '../src/isArguments.js'

describe('isArguments()', function() {
    it ('Returns false when input is an array', () => {
        chai.expect(isArguments([1, 2, 3])).to.deep.equal(false);
    });
});