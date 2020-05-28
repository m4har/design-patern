class connection {
  constructor(){
    this.connect;
  }
  /**
   * 
   * @param {String} id 
   * @param {Number} total 
   */
   query(id,total){
    if(!this.connect){
      console.log('connect')
      this.connect = true
    }
    // query here
  }
}

module.exports = connection