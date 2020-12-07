import chai from 'chai'
import map from '../src/map.js'

describe('map()', function() {
    it ('adds one to each item', () => {
        chai.expect(map([1, 2, 3], function(item) {return item+1;})).to.deep.equal([2, 3, 4]);
    });
});