const order = require('./orderService')

var Order = new order()
Order.addOrder('A1',1)
Order.addOrder('A5',1)
Order.addOrder('A3',1)
Order.addOrder('A2',1)