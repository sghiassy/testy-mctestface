class Person {
    constructor(firstName = "", lastName = "", age) {
        this.name = {
            first: firstName,
            last: lastName
        }
        this.age = age;
    }

    basicInfo() {
        return `${this.fullName()} - ${this.age}`;
    }

    fullName() {
        return `${this.name.first} ${this.name.last}`;
    }
}

module.exports = Person;