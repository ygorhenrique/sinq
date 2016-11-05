/*!
 * SINQ.js.
 * Script Integrated Query.
 *
 * @author Ygor Henrique S. Randes <rick.ygor@live.com>
 * @license MIT
 */

var sinq = require('./lib/sinq.js')

module.exports = function(){
  if(!Array.prototype.where){
    Array.prototype.where = sinq.where
  }

  if(!Array.prototype.groupBy){
    Array.prototype.groupBy = sinq.groupBy
  }

  if(!Array.prototype.orderBy){
    Array.prototype.orderBy = sinq.orderBy
  }

  if(!Array.prototype.orderByDescending){
    Array.prototype.orderByDescending = sinq.orderByDescending
  }

  if(!Array.prototype.select){
    Array.prototype.select = sinq.select
  }

  if(!Array.prototype.first){
    Array.prototype.first = sinq.first
  }

  if(!Array.prototype.last){
    Array.prototype.last = sinq.last
  }

  if(!Array.prototype.all){
    Array.prototype.all = sinq.all
  }

  if(!Array.prototype.contains){
    Array.prototype.contains = sinq.contains
  }

  if(!Array.prototype.range){
    Array.prototype.range = sinq.range
  }

  if(!Array.prototype.repeat){
    Array.prototype.repeat = sinq.repeat
  }

  if(!Array.prototype.distinct){
    Array.prototype.distinct = sinq.distinct
  }

  if(!Array.prototype.intersect){
    Array.prototype.intersect = sinq.intersect
  }

  if(!Array.prototype.union){
    Array.prototype.union = sinq.union
  }

  if(!Array.prototype.except){
    Array.prototype.except = sinq.except
  }
}
