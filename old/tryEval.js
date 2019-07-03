
const blog = {
    name: 'greenroots'
}
console.log('Before eval:', blog);

const key = 'Owner';
const value = 'Tapas';
testEval = () => eval(`blog.${key} = '${value}'`);

// Call the function
testEval();

console.log('After eval magic:', blog);

