// console.log("Hello world!!");

// person = 'Sharmin';
// character = {
//     name: person,
//     age: 21
// }

// console.log(person);
// console.log(character);
//-----------------------------
const { response } = require('express')
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    console.log('Request Received')
    response.json({msg: 'Welcome'});
})

app.listen(8888, () => {
    console.log('THe server is up and listening on port 3333')
})

