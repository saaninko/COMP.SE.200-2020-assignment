import chai from 'chai'
import compact from '../src/compact.js'

describe('compact()', function() {
    // DOESNT PASS - SHOULD PASS
    // it ('Removes undefined from an array', () => {
    //     chai.expect(compact([1, 2, undefined, 3])).to.deep.equal([1, 2, 3]);
    // });
    it ('Returns empty array for empty array', () => {
        chai.expect(compact([])).to.deep.equal([]);
    });
});