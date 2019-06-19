const employee = {
    firstName: 'Tapas',
    lastName: 'Adhikary'
};

let logHandler = {
    get: function(target, fieldName) {        
        console.log("Log: ", target[fieldName]);
        return Reflect.get(target, fieldName);
    }
};

let func = () => {
    let p = new Proxy(employee, logHandler);
    p.firstName;
    p.lastName;
};

func();