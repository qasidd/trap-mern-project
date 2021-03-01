'use strict'

const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const FilmSchema = new Schema({
    title : String,
    releasedate : String,
    runtime : Number,
    genre: String,
    poster : String,
    trailer: String,
    classification : Number,
    director : String,
    cast:String
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

mongoose.connect('mongodb://localhost:27017/Booking',{ useNewUrlParser: true, useUnifiedTopology: true},(err)=>{

if(err){console.error(err);}else{console.log('Connected')}
});

module.exports ={'film':film,'booking':booking};

