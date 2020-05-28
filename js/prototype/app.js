const store = require('./store')

const store1 = new store('baba','jakarta','indonesia','baju')
const store2 = store1.clone()
store2.setName('buba')
const store3 = store2.clone()
store3.setCity('bandung')

console.log(store1)
console.log(store2)
console.log(store3)