import chai from 'chai'
import words from '../src/words.js'

describe('words()', function() {
    it ('Splits comma separated string into list', () => {
        chai.expect(words('one, two, three')).to.deep.equal(['one', 'two', 'three']);
    });
    it ('Splits comma separated string into list, includes & when comma defined in regex', () => {
        chai.expect(words('one, two, & three', /[^, ]+g/)).to.deep.equal(['one', 'two', '&', 'three']);
    });
});