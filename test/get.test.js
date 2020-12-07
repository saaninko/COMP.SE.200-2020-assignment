import chai from 'chai'
import get from '../src/get.js'

describe('get()', function() {
    const testObject = {'a': [{'b': {'c': 3}}, 4]};
    it ('Should get the object with string input', () => {
        chai.expect(get(testObject, 'a[1]')).to.deep.equal(4);
    });
});