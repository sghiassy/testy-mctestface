const expect = require("chai").expect;
const sinon = require('sinon');
const Person = require('../src/js/Person.js');

describe("Person", () => {
    describe("constructor", () => {
        it('should take in the firstName, lastName and age', () => {
            const person = new Person('Testy', 'McTestFace', 40);

            expect(person.name.first).to.equal('Testy');
            expect(person.name.last).to.equal('McTestFace');
            expect(person.age).to.equal(40);
        });
    });

    describe('basicInfo', () => {
        const person = new Person('Testy', 'McTestFace', 40);
        const spy = sinon.spy(person, 'fullName');

        expect(person.basicInfo()).to.equal('Testy McTestFace - 40');
        expect(person.fullName.calledOnce).to.equal(true);
    });
});