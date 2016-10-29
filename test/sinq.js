var assert = require('assert');
require('../sinq.js')()

describe('Array', function() {
  describe('#where()', function() {
    it('should return the value in the where clause', function() {
      assert.equal(12, [12,32,43].where(m => m == 12));
    });
  });

  describe('#groupBy()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });

  describe('#orderBy()', function() {
    it('should return -1 when the value is not present', function() {
      //assert.equal(-1, [1,2,3].indexOf(4));

      var meuArray = [];
      meuArray.push({
        meuNome: 'Luana'
      });

      meuArray.push({
        meuNome: 'Pedro'
      });

      meuArray.push({
        meuNome: 'Fernanda'
      });

      meuArray.push({
        meuNome: 'Ana'
      });

      meuArray.orderBy('meuNome');

    });
  });

  describe('#select()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
