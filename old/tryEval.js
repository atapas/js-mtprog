const blog = {
    name: 'greenroots'
}

const key = 'Owner';
const value = 'Tapas';

function testEval() {
    eval(`blog.${key} = '${value}'`);
}

testEval();

console.log(blog);
