import chai from 'chai'
import isDate from '../src/isDate.js'

describe('isDate()', function() {
    it ('Return false for string', () => {
        chai.expect(isDate('1.12.2020')).to.deep.equal(false);
    });
});