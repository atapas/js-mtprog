// Object.defineProperty()
try {
    Object.defineProperty(obj, name, desc);
    // property defined successfully
} catch (e) {
    // possible failure and need to 
    // do something about it
}

// With Reflect API
if (Reflect.defineProperty(obj, name, desc)) {
    // success
} else {
    // failure (and far better)
}

