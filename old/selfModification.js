
const blog = {
    name: 'greenroots'
}
console.log('Before:', blog);

const key = 'Owner';
const value = 'Tapas';
test = () => blog[key] = value;

// Call the function
test();
console.log('After:', blog);


