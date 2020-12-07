import chai from 'chai'
import add from '../src/add.js'

describe('add()', function() {
    it ('Should add two same integers', () => {
        chai.expect(add(1, 1)).to.deep.equal(2);
    });
    it ('Should add two floats', () => {
        chai.expect(add(1.5, 0.25)).to.deep.equal(1.75);
    });
});