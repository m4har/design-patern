class employeFactory {
  /**
   * 
   * @param {String} name 
   */
  static staff(name){
    return {name, position:'staff', salary:1000}
  }
  /**
   * 
   * @param {String} name 
   */
  static manager(name){
    return {name, position:'manager', salary:2000}
  }
  /**
   * 
   * @param {String} name 
   */
  static director(name){
    return {name, position:'director', salary:3000}
  }
}

module.exports = employeFactory