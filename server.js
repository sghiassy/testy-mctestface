const express = require('express')
const app = express()
const ejs = require('ejs');
const fs = require('fs');
const Person = require('./src/js/Person.js');

// Page essentially echos the name from // http://localhost:3000/?firstName=Shaheen&lastName=Ghiassy&age=35

app.get('/', (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const age = req.query.age;
    const person = new Person(firstName, lastName, age);

    fs.readFile('./index.ejs', 'UTF-8', (err, file) => {
        const template = ejs.compile(file);
        const output = template({user:{basicInfo:person.basicInfo()}});
        res.send(output);
    });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});