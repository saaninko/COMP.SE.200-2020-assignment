import chai from 'chai'
import divide from '../src/divide.js'

describe('divide()', function() {
    it ('Should return integer when even number divided by two', () => {
        chai.expect(divide(4, 2)).to.deep.equal(2);
    });
});