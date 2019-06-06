let user = {
    firstName: 'Tapas',
    lastName: 'Adhikary'
};

user.age = 25;

console.group('User');
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.age);
console.groupEnd();

user.age = 'Something Blunder!'
console.log(user.age);

user.age = -100
console.log(user.age);


// Now let me use the Proxy concept to add Vaiodations

// This is same Proxy Handler but we named it as 'validator' :-)
const validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if(!Number.isInteger(value)) {
                throw new TypeError('Age is always an Integer, Please Correct it!');
            }
            if(value < 0) {
                throw new TypeError('This is insane, a negative age?');
            }
        }
    }
};

// Let's create the Proxy

let p = new Proxy(user, validator);
p.age = 'I am testing the blunder';

// test this one by commenting the above line.
p.age = -1;

