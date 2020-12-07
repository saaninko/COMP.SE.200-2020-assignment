import chai from 'chai'
import add from '../src/add.js'

describe('add()', function() {
    it ('Should add two same integers', () => {
        chai.expect(add(1, 1)).to.deep.equal(2);
    });
});