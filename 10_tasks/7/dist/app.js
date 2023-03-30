class Employee {
    constructor(id, name, lastName, age) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.store = [];
        this.getId = () => this.id;
    }
}
class Work {
    constructor() {
        this.employees = [];
    }
    setEmp(id, name, lastName, age) {
        this.employees.push(new Employee(id, name, lastName, age));
        return this;
    }
    get Employees() {
        return this.employees;
    }
    sort(type) {
        type = type.toLowerCase();
        if (type != 'up' && type != 'down') {
            throw new Error('invalid type');
        }
        ;
        for (let i = 0; i < this.employees.length; i++) {
            for (let k = 0; k < this.employees.length - 1; k++) {
                let first = this.employees[k];
                let second = this.employees[k + 1];
                if (type == 'up') {
                    if (first.getId() < second.getId()) {
                        this.employees[k] = second;
                        this.employees[k + 1] = first;
                    }
                }
                else {
                    if (first.getId() > second.getId()) {
                        this.employees[k] = second;
                        this.employees[k + 1] = first;
                    }
                }
            }
        }
        return this.employees;
    }
}
let work = new Work();
work
    .setEmp(1, 'Jack', 'Sparrow', 35)
    .setEmp(23, 'Name', 'Nameson', 44)
    .setEmp(11, 'John', 'Jonson', 23)
    .setEmp(64, 'Jack', 'Sparrow', 45)
    .setEmp(23321, 'Name', 'Nameson', 44)
    .setEmp(133, 'Jonny', 'Jonson', 33)
    .setEmp(3, 'Silena', 'Sparrow', 45)
    .setEmp(263, 'Jacky', 'Nameson', 74)
    .setEmp(41, 'Nick', 'Jonson', 24)
    .setEmp(154, 'Simon', 'Sparrow', 51)
    .setEmp(203, 'Norton', 'Nameson', 27)
    .setEmp(1123, 'Nicole', 'Siemens', 23);
console.log(work.Employees);
let sort = work.sort('down');
sort = work.sort('up');
sort = work.sort('upp');
console.log(work.sort('up'));
//# sourceMappingURL=app.js.map