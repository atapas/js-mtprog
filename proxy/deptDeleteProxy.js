let department = {
    id: 'Dept-001',
    name: 'Sales',
    manager: 'Tapas Adhikary'
}

console.group('Department');
    console.log(department.id);
    console.log(department.name);
    console.log(department.manager);
console.groupEnd();

// delete department.id;
// console.log(department);

const deleteProxy = {
    deleteProperty: function(target, fieldName) {
        if(fieldName === 'id') return false;

        delete target[fieldName];
        return true;
    }
}

let p = new Proxy(department, deleteProxy);

delete p.id;
console.log(department);
