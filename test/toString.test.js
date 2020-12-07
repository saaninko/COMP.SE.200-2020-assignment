import chai from 'chai'
import toString from '../src/toString.js'

describe('toString()', function() {
    it ('Returns empty string for null', () => {
        chai.expect(toString(null)).to.deep.equal('');
    });
    it ('Returns comma-separated items for array', () => {
        chai.expect(toString([1, 2, 3])).to.deep.equal('1,2,3');
    });
    it ('Returns minus zero as string', () => {
        chai.expect(toString(-0)).to.deep.equal('-0');
    });
});