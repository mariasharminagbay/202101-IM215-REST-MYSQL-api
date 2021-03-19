//1. 
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

// //2. 
// // const { response, request } = require('express')
// //const { request, response } = require('express')
// const express = require('express')  
// //-- this call the express as module and its main goal to run an HTP module to you
// // const morgan = require('morgan');

// const app = express()

// // response should be added before calling listen; where you want to response before you listen

// app.get('/', (request, response) => {
//     console.log('Request received.')
//     //response.send('Welcome');
//     //response.json({'msg' : 'Welcome'}) ; // this will be used to have a json
//     //both .send and .json opens a channel/connection and send the information and end the connection.
//     // both can be used either way
//     //take note that if there is no response.send or response.json back - and your will not end your connection - your connection will be hanging
//     response.end()
// })

// 3. together with morgan

// const express = require('express') 
// const morgan = require('morgan');

// const app = express()
// //app.use(morgan('combined'))
// app.use(morgan('short'))

// app.get('/', (request, response) => {
//     console.log('Request received.')
   
//     response.end()
// })

//----end morgan

//4.

const { response } = require('express')
const express = require('express') 
const morgan = require('morgan')
const bodyParser = require('body-parser');

const app = express()
//app.use(morgan('combined'))
//app.use(morgan('short'))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}));


app.get('/', (request, response) => {
    //console.log('Request received.')
//      * Types of Parameters
//      * Query  param1=value1 & param2=val2
//      * Route   /val1/val2/val3  - example: localhost:3333/username
//      * Body  param1=val1&param2=val2
//      */

//Query
// console.log('Query parameters')
// console.log(request.query)

//Body
console.log('Body parameters')
console.log(request.body)

response.end()
})

app.get('/:first_name/:last_name/:age', (request,response) => {
    //Route Parameter
    console.log('Route parameters')
    console.log(request.params)  //this will call the parameter
    response.end()
})

app.get('/id/:userId', (request,response) => {

    //Query
    console.log('Query parameters')
    console.log(request.query)

    //Route Parameter
    console.log('### Route parameters')
    console.log(request.params)  //this will call the parameter
    response.end()

    //Body
    console.log('Body parameters')
    console.log(request.body)

    response.end()
})

//-- #4
app.listen(8888, () => {
    console.log('THe server is up and listening on port 8888')
})
