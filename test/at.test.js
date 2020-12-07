import chai from 'chai'
import at from '../src/at.js'

describe('at()', function() {
    const testObject = {'a': [{'b': {'c': 3}}, 4]};
    it ('Should get the object with correct input', () => {
        chai.expect(at(testObject, ['a[1]'])).to.deep.equal([4]);
    });
});