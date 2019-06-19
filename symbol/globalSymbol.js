console.log(Symbol('test') === Symbol('test'));

console.log(Symbol.for('test') === Symbol.for('test'));

let myObj = {};

let firstSymbol = Symbol.for('first');
let anotherFirstSymbol = Symbol.for('first');
myObj[firstSymbol] = 'First';
myObj[anotherFirstSymbol] = 'another first';

console.log(myObj[Symbol.for('first')]);

