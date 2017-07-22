class Person {
    constructor(firstName = "", lastName = "", age) {
        this.name = {
            first: firstName,
            last: lastName
        }
        this.age = age;
    }

    basicInfo() {
        return `${this.name.first} ${this.name.last} - ${this.age}`;
    }
}

module.exports = Person;