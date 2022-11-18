const express = require ('express'); 
const app = express ();
const morgan = require ('morgan');


//middleares
app.use(morgan('dev'));



// start server
app.listen (3000, () => {
    console.log('server on port ${3000}');
});