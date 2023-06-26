var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('My second case', () => {
  it('second case- check1', () => {
    assert.equal([1, 2, 3].indexOf(3), 2);
  });
  it('second case- check 2', () => {
    assert.equal([1, 2, 3].indexOf(1), 0);
  });
})