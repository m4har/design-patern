 class store {
  /**
   * 
   * @param {String} name 
   * @param {String} city 
   * @param {String} country 
   * @param {String} category 
   */
  constructor(name, city, country, category){
    this.name = name;
    this.city = city;
    this.country = country;
    this.category = category;
  }
  setName(name){
    this.name = name;
  };
  setCity(city){
    this.city = city;
  };
  setCountry(country){
    this.country = country;
  };
  setCategory(category){
    this.category = category
  };
  clone(){
    return new store(this.name, this.city, this.country, this.category);
  };
};
module.exports = store