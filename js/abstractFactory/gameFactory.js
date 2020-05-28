const {arenaEasy, arenaHard, arenaMedium} = require('./arena')
const {levelEasy, levelHard, levelMedium} = require('./level')
class gameFactoryEasy {
  constructor(){
    this.level;
    this.arena;
    this.createArena();
    this.createLevel();
  }
  createLevel(){
    this.level = new levelEasy().start()
  }
  createArena(){
    this.arena = new arenaEasy().start()
  }
  build(){
    return this
  }
}
class gameFactoryMedium {
  constructor(){
    this.level;
    this.arena;
    this.createArena();
    this.createLevel();
  }
  createLevel(){
    this.level = new levelMedium().start()
  }
  createArena(){
    this.arena = new arenaMedium().start()
  }
  build(){
    return this
  }
}
class gameFactoryHard {
  constructor(){
    this.level;
    this.arena;
    this.createArena();
    this.createLevel();
  }
  createLevel(){
   this.level = new levelHard().start()
  }
  createArena(){
   this.arena  = new arenaHard().start()
  }
  build(){
    return this
  }
}

module.exports = {gameFactoryEasy, gameFactoryMedium, gameFactoryHard}