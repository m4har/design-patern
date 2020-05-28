class game {
  constructor(gameFactory){
    this.level = gameFactory.level
    this.arena = gameFactory.arena
  }
  start(){
    return this
  }
}

module.exports = game