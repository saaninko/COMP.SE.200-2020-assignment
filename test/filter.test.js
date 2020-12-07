import chai from 'chai'
import filter from '../src/filter.js'

describe('filter()', function() {
    it ('Should return the object that the predicate stands true for', () => {
        const testArray = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
            ];
        chai.expect(filter(testArray, ({ active }) => active)).to.deep.equal([testArray[0]]);
    });
});