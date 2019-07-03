
const sun = {};

Object.defineProperty(sun, 'rises', {
    value: true,
    configurable: false,
    writable: false,
    enumerable: false
});

console.log('sun rises', sun.rises);
sun.rises = false;
console.log('sun rises', sun.rises);

