'use strict'

const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const FilmSchema = new Schema({
    title : String,
    releasedate : Date,
    runtime : Number,
    genre: String,
    poster : String,
    trailer: String,
    classification : String,
    director : String,
    cast: String,
    desc: String
});

const film = model('film', FilmSchema)

const bookingSchema = new Schema({
    name : String,
    movie_title : String,
    screening : String,
    nofseats : Number,
    adult : Boolean,
    child : Boolean,
    concession : String

});
 
const booking = model('booking', bookingSchema)

const ContactSchema = new Schema({
    name : String,
    email : String,
    subject : String,
    message : String

});
 
const contact = model('contact', ContactSchema)

mongoose.connect('mongodb://localhost:27017/Booking',{ useNewUrlParser: true, useUnifiedTopology: true},(err)=>{

if(err){console.error(err);}else{console.log('Connected')}
});

module.exports ={'film':film,'booking':booking,'contact':contact};

