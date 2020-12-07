import chai from 'chai'
import keys from '../src/keys.js'

describe('keys()', function() {
    function Foo() {
        this.a = 1,
        this.b = 2
    };
    it ('Returns correct keys for foo', () => {
        chai.expect(keys(new Foo)).to.deep.equal(['a', 'b']);
    });
});