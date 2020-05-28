const { gameFactoryEasy, gameFactoryHard, gameFactoryMedium } = require('./gameFactory')
const game = require('./game')

const easy = new game(new gameFactoryEasy().build()).start()
const medium = new game(new gameFactoryMedium().build()).start()
const hard = new game(new gameFactoryHard().build()).start()

console.log(easy)
console.log(medium)
console.log(hard)