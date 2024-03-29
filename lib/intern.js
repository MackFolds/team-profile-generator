const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name = '', id = '', email = '', role = '') {
        super(name, id, email, role);
    }

    getRole() {
        this.role = 'Intern';
        return this.role;
    }

    getSchool(school) {
        this.school = school;
        return this.school;
    }
}

module.exports = Intern;