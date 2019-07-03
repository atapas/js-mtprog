const sun = {};

const result = Reflect.defineProperty(sun, 'canTalk', {
    value: true,
    configurable: false,
    writable: false,
    enumerable: false
});

if (result) {
    console.log('girl.canTalk', sun.rises);

    sun.rises = false;

    console.log('girl.canTalk', sun.rises);
}
