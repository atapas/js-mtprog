
const users = {
    'Tom': 32,
    'Bill': 50,
    'Sam': 65
};

Object.keys(users).forEach(name => {
    const age = users[name];
    console.log(`User ${name} is ${age} years old!`);
});

