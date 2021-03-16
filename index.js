// //this exercise is for the yarn to run the .js file
// console.log("Hello world!!")

// person = 'Sharmin';
// character = {
//     name: person,
//     age: 21
// }

// // console.log(person);
// console.log(character)
// //-- end of example for the yarn [script name] 



// //-----------------------------

// const { response, request } = require('express')
//const { request, response } = require('express')
const express = require('express')  
//-- this call the express as module and its main goal to run an HTP module to you
// const morgan = require('morgan');

const app = express()

// response should be added before calling listen; where you want to response before you listen

app.get('/', (request, response) => {
    console.log('Request received.')
    //response.send('Welcome');
    //response.json({'msg' : 'Welcome'}) ; // this will be used to have a json
    //both .send and .json opens a channel/connection and send the information and end the connection.
    // both can be used either way
    //take note that if there is no response.send or response.json back - and your will not end your connection - your connection will be hanging
    response.end()
})

app.listen(8888, () => {
    console.log('THe server is up and listening on port 8888')
})
