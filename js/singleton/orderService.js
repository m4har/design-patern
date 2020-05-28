const con = require('./connection')
const connect = new con()
class order {
  constructor(){
    this.orderItem = []
  }
    /**
   * 
   * @param {String} id 
   * @param {Number} total 
   */
  addOrder (id, total) {
    this.orderItem = [...this.orderItem,{id,total}]
    connect.query(id, total)
  }
}
module.exports = order