const girl = {};

Object.defineProperty(girl, 'canTalk', {
    value: true,
    configurable: false,
    writable: false,
    enumerable: false
});

console.log('girl.canTalk', girl.canTalk);

girl.canTalk = false;

console.log('girl.canTalk', girl.canTalk);
