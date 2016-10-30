/*!
 * SINQ.js.
 * Script Integrated Query.
 *
 * @author Ygor Henrique S. Randes <rick.ygor@live.com>
 * @license MIT
 */

var sinq = require('./sinq.js')

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
}
