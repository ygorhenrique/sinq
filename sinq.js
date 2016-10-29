/*!
 * SINQ.js.
 * Script Integrated Query.
 *
 * @author Ygor Henrique S. Randes <rick.ygor@live.com>
 * @license MIT
 */

module.exports = function(){
  if (!Array.prototype.where){
    Array.prototype.where = function(fn) {

      var arr = []

      this.forEach(m => {

        if(fn(m)){
          arr.push(m)
        }
      })

      return arr
   }
  }

  if (!Array.prototype.groupBy){
    Array.prototype.groupBy = function(fn) {

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
   }
  }

 if (!Array.prototype.orderBy){
   Array.prototype.orderBy = function(key) {

     return this.sort(function (a, b){ return a[key] > b[key] })
  }
 }

 if (!Array.prototype.orderByDescending){
   Array.prototype.orderByDescending = function(key) {

     return this.sort(function (a, b){ return a[key] < b[key] })
  }
 }

 if (!Array.prototype.select){
   Array.prototype.select = function(fn) {

     var arr = []

     this.forEach(m => {
        arr.push(fn(m))
     })

     return arr
  }
 }

 if (!Array.prototype.first){
   Array.prototype.first = function() {

     return this[0]
  }
 }

 if (!Array.prototype.last){
   Array.prototype.last = function() {

     return this[this.length-1]
  }
 }

 if (!Array.prototype.all){
   Array.prototype.all = function(fn) {
     return this.every(fn);
  }
 }
}
