const obj = { bar: true, baz: false};

// delete object[key]
function deleteProperty(object, key) {
    delete object[key];
}
deleteProperty(obj, 'bar');

// With Reflect API
Reflect.deleteProperty(obj, 'bar');

console.log(obj);

