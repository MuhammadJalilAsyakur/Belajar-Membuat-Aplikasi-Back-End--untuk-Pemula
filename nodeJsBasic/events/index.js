// const { EventEmitter } = require('events');

// const myEventEmitter = new EventEmitter();

// const makeCoffee = ({ name }) => {
//     console.log(`kopi ${name} telah di buat`)
// }

// const makeBill = ({ price }) => {
//     console.log(`Bill sebesar ${price} telah dibuat`)
// }

// const onCoffeeOrderedListener = ({ name, price }) => {
//     makeCoffee({ name });
//     makeBill({ price });
// }

// myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
// myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 })



// latihan Events

const { EventEmitter } = require('events');


const birthdayEventListener = (name) => {
    console.log(`happy birthday ${name}`);
}

const myEmitter = new EventEmitter();

myEmitter.on('birthday', birthdayEventListener);
myEmitter.emit('birthday', 'johndoe')
