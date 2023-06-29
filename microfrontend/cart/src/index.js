import faker from 'faker';

const cartTaker = `<div>You have ${faker.random.number()}</div>`;

console.log('hi')
document.querySelector('#dev-cart').innerHTML = cartTaker;
