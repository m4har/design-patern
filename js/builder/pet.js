class pet {
  /**
   * 
   * @param {name:String, type:String, gender:String} builder 
   */
  constructor(builder){
    this.name = builder.name
    this.type = builder.type
    this.gender = builder.gender
  }
  // logic here
}

module.exports = pet