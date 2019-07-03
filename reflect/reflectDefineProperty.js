const girl = {};

const result = Reflect.defineProperty(girl, 'canTalk', {
    value: true,
    configurable: false,
    writable: false,
    enumerable: false
});

if (result) {
    console.log('girl.canTalk', girl.canTalk);

    girl.canTalk = false;

    console.log('girl.canTalk', girl.canTalk);
}
