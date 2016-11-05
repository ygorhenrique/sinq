var assert = require('assert')
             require('../index.js')()

describe('Array', function() {
  describe('#where()', function() {

    var arr = [55, 123, 99, 30, 92]

    it('should return the value in the where clause', () => assert.equal(99, arr.where(m => m == 99)))
    it('should return an array of 3 items', () => assert.equal(3, arr.where(m => m > 60).length))
  })

  describe('#groupBy()', function() {
    var test = [
      { id: 9,  nome: 'Shark',   type: 'Fish'     },
      { id: 1,  nome: 'Dog',     type: 'Mammals'  },
      { id: 8,  nome: 'Catfish', type: 'Fish'     },
      { id: 2,  nome: 'Cat',     type: 'Mammals'  },
      { id: 4,  nome: 'Chicken', type: 'Birds'    },
      { id: 3,  nome: 'Lion',    type: 'Mammals'  },
      { id: 5,  nome: 'Sparrow', type: 'Birds'    },
      { id: 6,  nome: 'Salmon',  type: 'Fish'     },
      { id: 7,  nome: 'Tuna',    type: 'Fish'     }
    ]

    it('test object should have 3 group keys', () => assert.equal(3, test.groupBy(m => m.type).keys.length))
    it('Mammals should have 3 items', () => assert.equal(3, test.groupBy(m => m.type)['Mammals'].length))
    it('Birds should have 2 items', () => assert.equal(2, test.groupBy(m => m.type)['Birds'].length))
    it('Fish should have 4 items', () => assert.equal(4, test.groupBy(m => m.type)['Fish'].length))
  })

  describe('#orderBy()', function() {
    var arr = []
    arr.push({ animal: 'Dog' })
    arr.push({ animal: 'Tuna' })
    arr.push({ animal: 'Cat' })
    arr.push({ animal: 'Shark' })
    arr.orderBy('animal')

    it('first index should be Cat', () => assert.equal('Cat', arr[0].animal))
    it('first index should be Dog', () => assert.equal('Dog', arr[1].animal))
    it('first index should be Shark', () => assert.equal('Shark', arr[2].animal))
    it('first index should be Tuna', () => assert.equal('Tuna', arr[3].animal))
  })

  describe('#select()', function() {

    var arr = []
    arr.push({ id: 9,  name: 'Shark',   type: 3 })
    arr.push({ id: 1,  name: 'Dog',     type: 1 })
    arr.push({ id: 8,  name: 'Catfish', type: 3 })
    arr.push({ id: 2,  name: 'Cat',     type: 1 })
    arr.push({ id: 4,  name: 'Chicken', type: 2 })
    arr.push({ id: 3,  name: 'Lion',    type: 1 })
    arr.push({ id: 5,  name: 'Sparrow', type: 2 })
    arr.push({ id: 6,  name: 'Salmon',  type: 3 })
    arr.push({ id: 7,  name: 'Tuna',    type: 3 })
    arr.push({ id: 7,  name: 'Thusnk',  type: 14 })

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
    })

    it('first animal should be an Fish', () => assert.equal('Fish', result.first().type))
    it('last animal should be an Alien', () => assert.equal('Alien', result.last().type))
  })

  describe('#contains()', function() {

    var arr = [];
    arr.push({ id: 9,  name: 'Shark',   type: 3 })
    arr.push({ id: 1,  name: 'Dog',     type: 1 })
    arr.push({ id: 8,  name: 'Catfish', type: 3 })
    arr.push({ id: 2,  name: 'Cat',     type: 1 })
    arr.push({ id: 4,  name: 'Chicken', type: 2 })
    arr.push({ id: 3,  name: 'Lion',    type: 1 })
    arr.push({ id: 5,  name: 'Sparrow', type: 2 })
    arr.push({ id: 6,  name: 'Salmon',  type: 3 })
    arr.push({ id: 7,  name: 'Tuna',    type: 3 })
    arr.push({ id: 7,  name: 'Thusnk',  type: 14 })

    it('should contain its own item', () => assert(arr.contains(arr[6])))
    it('shouldn\'t contain an independent object', () => assert(!arr.contains({ id: 5,  name: 'Sparrow', type: 2 })))
  })

  describe('#range()', function() {

    var arr     = [].range(5),
      expected  = [0, 1, 2, 3, 4]

    it('should contain 5 items', () => assert.equal(5, arr.length))
    it('elements should be in sequence', () => expected.forEach((m) => assert.equal(m, arr[m])))
  })

  describe('#repeat()', function() {

    var arr = [].repeat('itemToBeRepeated', 10)

    it('should contain 10 items', () => assert.equal(10, arr.length))
    it('elements should be repeated', () => arr.forEach((m) => assert.equal('itemToBeRepeated', m)))
  })

  describe('#distinct()', function() {

    var arr     = [1, 3, 1, 4, 5, 6, 9, 4, 5, 2, 3, 6, 0, 2, 0, 1].distinct(),
      expected  = [1, 3, 4, 5, 6, 9, 2, 0]

    it('should contain 2 items', () => assert.equal(expected.length, arr.length))
    for(var i = 0; i < expected.length; i++)
      it(`element arr[${i}] should be ${expected[i]}`, () => assert.equal(expected[i], arr[i]))
  })

  describe('#intersect()', function() {

    var arrA    = [-5, -4, -3, -2, 0, 1, 2, 3, 4, 5],
      arrB      = [2, 4, 6, 8, 10],
      expected  = [2, 4]

    var intersectionAB = arrA.intersect(arrB)

    it('should contain 2 items', () => assert.equal(expected.length, intersectionAB.length))
    for(var i = 0; i < intersectionAB.length; i++)
      it(`element intersectionAB[${i}] should be ${expected[i]}`, () => assert.equal(expected[i], intersectionAB[i]))
  })

  describe('#union()', function() {

    var arrA    = [1, 3, 5, 7],
      arrB      = [2, 4, 4, 6],
      expected  = [1, 3, 5, 7, 2, 4, 4, 6]

    var unionAB = arrA.union(arrB)

    it('should contain 2 items', () => assert.equal(expected.length, unionAB.length))
    for(var i = 0; i < unionAB.length; i++)
      it(`element intersectionAB[${i}] should be ${expected[i]}`, () => assert.equal(expected[i], unionAB[i]))
  })

  describe('#except()', function() {

    var arrA    = [1, 2, 3, 4, 5, 6, 7, 8, 9],
      arrB      = [2, 4, 6, 8, 10, 12],
      expected  = [1, 3, 5, 7, 9]

    var arrAExceptArrB = arrA.except(arrB)

    it('should contain 2 items', () => assert.equal(expected.length, arrAExceptArrB.length))
    for(var i = 0; i < arrAExceptArrB.length; i++)
      it(`element intersectionAB[${i}] should be ${expected[i]}`, () => assert.equal(expected[i], arrAExceptArrB[i]))
  })
})
