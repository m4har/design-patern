const pet = require('./pet')

class petBuilder {
  /**
   * 
   * @param {String} name 
   */
  setName(name){
    this.name = name
    return this
  }
  /**
   * 
   * @param {String} type 
   */
  setType(type){
    this.type = type
    return this
  }
  /**
   * 
   * @param {String} gender 
   */
  setGender(gender){
    this.gender = gender
    return this
  }
  build(){
    return new pet(this)
  }
}

module.exports = petBuilder