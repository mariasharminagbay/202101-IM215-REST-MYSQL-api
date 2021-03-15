// console.log("Hello world!!");

// person = 'Sharmin';
// character = {
//     name: person,
//     age: 21
// }

// console.log(person);
// console.log(character);
//-----------------------------
const { response, request } = require('express')
//const express = require('express')
const morgan = require('morgan');

const app = express()
app.use(morgan('combined'))

app.get('/', (request, response) => {
    //console.log('Request Received')
    //response.json({msg: 'Welcome'});


    /**
     * Types of Parameters
     * Query
     * Route
     * Body
     * 
     */

    response.end()
})

app.listen(8888, () => {
    console.log('THe server is up and listening on port 8888')
})

app.get('/id/:user_id', (request, response) => {

    //Query
    console.log('Query Parameters')
    console.log(request.query)

    //Route
    console.log('#### Route Parameters')
    console.log(request.params)

    //Body
    console.log('Body Parameters')
    console.log(request.body)

    response.end()
})
