const obj = { bar: true, baz: false};

/*function deleteProperty(object, key) {
    delete object[key];
}

deleteProperty(obj, 'bar');

console.log(obj);*/

Reflect.deleteProperty(obj, 'bar');

console.log(obj);