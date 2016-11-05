/*!
 * SINQ.js.
 * Script Integrated Query.
 *
 * @author Ygor Henrique S. Randes <rick.ygor@live.com>
 * @license MIT
 */

module.exports = {
  where: function(fn) {
    var arr = []

    this.forEach(m => {

      if(fn(m)){
        arr.push(m)
      }
    })

    return arr
  },

  groupBy: function(fn) {
    var groupedItems = []
    groupedItems.keys = []

    this.forEach(m => {

      var groupIndex = fn(m)

      if(groupedItems.keys.indexOf(groupIndex) == -1) {
        groupedItems[groupIndex] = {}
        groupedItems[groupIndex] = []
        groupedItems.keys.push(groupIndex)
      }

      groupedItems[groupIndex].push(m)
    })

    return groupedItems
  },

  select: function(fn) {

    var arr = []

    this.forEach(m => {
       arr.push(fn(m))
    })

    return arr
  },

  orderBy: function(key) { return this.sort(function (a, b){ return a[key] > b[key] }) },

  orderByDescending: function(key) { return this.sort(function (a, b){ return a[key] < b[key] }) },

  first: function() { return this[0] },

  last: function() { return this[this.length-1] },

  all: function(fn) { return this.every(fn) },

  contains: function(item) { return this.indexOf(item) != -1 },

  range: function(n) { return [...Array(n).keys()] },

  repeat: function(item, n) { return Array(n).fill(item) },

  distinct: function() {

    var distinct = []

    this.forEach(item => {
      if(!distinct.contains(item)){
        distinct.push(item)
      }
    })

    return distinct
  },

  intersect: function(arr) {

    var intersection = []

    arr.forEach(item => {
      if(this.contains(item)){
        intersection.push(item)
      }
    })

    return intersection
  },

  union: function(arr) {

    var union = []

    this.forEach(item => union.push(item))
    arr.forEach(item => union.push(item))

    return union
  },

  except: function(arr) {

    var result = []

    this.forEach(item => {
      if(!arr.contains(item)){
        result.push(item)
      }
    })

    return result
  }
}
