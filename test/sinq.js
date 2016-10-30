var assert = require('assert');
require('../index.js')();

describe('Array', function() {
  describe('#where()', function() {

    var arr = [55, 123, 99, 30, 92];

    it('should return the value in the where clause', () => assert.equal(99, arr.where(m => m == 99)));
    it('should return an array of 3 items', () => assert.equal(3, arr.where(m => m > 60).length));
  });

  describe('#groupBy()', function() {
    var test = [];
    test.push({ id: 9,  nome: 'Shark',   type: 'Fish' });
    test.push({ id: 1,  nome: 'Dog',     type: 'Mammals' });
    test.push({ id: 8,  nome: 'Catfish', type: 'Fish' });
    test.push({ id: 2,  nome: 'Cat',     type: 'Mammals' });
    test.push({ id: 4,  nome: 'Chicken', type: 'Birds' });
    test.push({ id: 3,  nome: 'Lion',    type: 'Mammals' });
    test.push({ id: 5,  nome: 'Sparrow', type: 'Birds' });
    test.push({ id: 6,  nome: 'Salmon',  type: 'Fish' });
    test.push({ id: 7,  nome: 'Tuna',    type: 'Fish' });

    it('test object should have 3 group keys', () => assert.equal(3, test.groupBy(m => m.type).keys.length));
    it('Mammals should have 3 items', () => assert.equal(3, test.groupBy(m => m.type)['Mammals'].length));
    it('Birds should have 2 items', () => assert.equal(2, test.groupBy(m => m.type)['Birds'].length));
    it('Fish should have 4 items', () => assert.equal(4, test.groupBy(m => m.type)['Fish'].length));
  });

  describe('#orderBy()', function() {
    var arr = [];
    arr.push({ animal: 'Dog' });
    arr.push({ animal: 'Tuna' });
    arr.push({ animal: 'Cat' });
    arr.push({ animal: 'Shark' });
    arr.orderBy('animal');

    it('first index should be Cat', () => assert.equal('Cat', arr[0].animal));
    it('first index should be Dog', () => assert.equal('Dog', arr[1].animal));
    it('first index should be Shark', () => assert.equal('Shark', arr[2].animal));
    it('first index should be Tuna', () => assert.equal('Tuna', arr[3].animal));

  });

  describe('#select()', function() {

    var arr = [];
    arr.push({ id: 9,  name: 'Shark',   type: 3 });
    arr.push({ id: 1,  name: 'Dog',     type: 1 });
    arr.push({ id: 8,  name: 'Catfish', type: 3 });
    arr.push({ id: 2,  name: 'Cat',     type: 1 });
    arr.push({ id: 4,  name: 'Chicken', type: 2 });
    arr.push({ id: 3,  name: 'Lion',    type: 1 });
    arr.push({ id: 5,  name: 'Sparrow', type: 2 });
    arr.push({ id: 6,  name: 'Salmon',  type: 3 });
    arr.push({ id: 7,  name: 'Tuna',    type: 3 });
    arr.push({ id: 7,  name: 'Thusnk',  type: 14 });

    var result = arr.select(animal =>
    {
      return {
        id: animal.id,
        nome: animal.name,
        type: (() => {
          switch (animal.type) {
            case 1: return 'Mammals';
            case 2: return 'Birds';
            case 3: return 'Fish';
            default:
              return 'Alien';
          }
        })()
      }
    });

    it('Last animal should be an Fish', () => assert.equal('Fish', result.first().type));
    it('Last animal should be an Alien', () => assert.equal('Alien', result.last().type));
  });

  describe('#contains()', function() {

    var arr = [];
    arr.push({ id: 9,  name: 'Shark',   type: 3 });
    arr.push({ id: 1,  name: 'Dog',     type: 1 });
    arr.push({ id: 8,  name: 'Catfish', type: 3 });
    arr.push({ id: 2,  name: 'Cat',     type: 1 });
    arr.push({ id: 4,  name: 'Chicken', type: 2 });
    arr.push({ id: 3,  name: 'Lion',    type: 1 });
    arr.push({ id: 5,  name: 'Sparrow', type: 2 });
    arr.push({ id: 6,  name: 'Salmon',  type: 3 });
    arr.push({ id: 7,  name: 'Tuna',    type: 3 });
    arr.push({ id: 7,  name: 'Thusnk',  type: 14 });

    it('Should contain its own item', () => assert.equal(true, arr.contains(arr[6])));
    it('Shouldn\'t contain an independent object', () => assert.equal(false, arr.contains({ id: 5,  name: 'Sparrow', type: 2 })));
  });
});
