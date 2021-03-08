'use strict'

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const FilmSchema = new Schema({
    title: String,
    releasedate: Date,
    runtime: Number,
    genre: String,
    poster: String,
    trailer: String,
    classification: String,
    director: String,
    cast: String,
    desc: String,
    screenings: [Date]
});

const film = model('film', FilmSchema)

const bookingSchema = new Schema({
    name: String,
    movie_title: String,
    poster: String,
    screening: String,
    deluxe: Boolean,
    nofseats: Number,
    adult: Number,
    child: Number,
    concessions: [new Schema({ type: String, size: String, quantity: { type: Number, default: 0 } })],
    total: Number,
    paymentsuccess: Boolean
});

const booking = model('booking', bookingSchema)

mongoose.connect('mongodb://localhost:27017/Booking', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {

    if (err) { console.error(err); } else { console.log('Connected') }
});

module.exports = { 'film': film, 'booking': booking };

