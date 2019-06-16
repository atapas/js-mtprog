// Use of Symbols as Object Keys

let myObj = {};
let firstSymb = Symbol('First');
let secondSymb = Symbol('Second');

myObj[firstSymb] = 'This is First Symbol';
myObj[secondSymb] = 'This is Second Symbol';
myObj[Symbol('test')] = 'This is test Symbol';
myObj['simpleKey'] = 'This is a Simple Key';

console.log(myObj);

// To retrieve:
console.log(myObj[firstSymb]);
console.log(myObj[secondSymb]);
console.log(myObj[Symbol('test')]); // undefined, why? Because,
console.log(Symbol('test') === Symbol('test'));

// Iterate
console.log(Object.keys(myObj));
console.log(Object.getOwnPropertyNames(myObj));
console.log(Object.getOwnPropertySymbols(myObj));