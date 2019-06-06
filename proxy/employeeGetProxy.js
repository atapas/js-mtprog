const employee = {
    firstName: 'Tapas',
    lastName: 'Adhikary'
};

console.group('employee');
    console.log(employee.firstName);
    console.log(employee.lastName);
    console.log(employee.org);
    console.log(employee.fullName);
console.groupEnd()

// Now let me use the Proxy concept to get a readble error message and also
// override to get the value for fullName Property.

let handler = {
    get: function(target, fieldName) {        

        if(fieldName === 'fullName' ) {
            return `${target.firstName} ${target.lastName}`;
        }

        return fieldName in target ?
            target[fieldName] :
                `We do not find the Employee Information for '${fieldName}'!`

    }
};

let p = new Proxy(employee, handler);

console.group('proxy');
    console.log(p.firstName);
    console.log(p.lastName);
    console.log(p.org);
    console.log(p.fullName);
console.groupEnd()

