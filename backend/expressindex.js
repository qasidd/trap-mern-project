const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const createError = require('http-errors');
//instantiate my app
const app = express();
app.use(cors());
app.use(bodyParser.json());


//importing all of methods
const FilmRoute = require('./router/film.js');
app.use("/film",FilmRoute);

const BookingRoute = require('./router/bookings.js')
app.use("/bookings",BookingRoute)

const ContactRoute = require('./router/contact.js')
app.use("/contactus",ContactRoute)
//error handling
app.use((req,res,next) => {
    next(createError(404, 'Resource not found'));
});

app.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).send(err.message || "something went wrong");
})

//comunicat with the app on a specififc port 
//app.listen(5019);
//DEPOLY ON A RANDOM PORT
//const server = app.listen

const server = app.listen(5019, () =>{ console.log(`server was succesfully started on port number: ${server.address().port}`)} );
