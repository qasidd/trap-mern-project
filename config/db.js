'use strict'

const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const productSchema = new Schema({
    name : String,
    price : String,
    onSale : Boolean
});

const product = model('product', productSchema)

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
module.exports ={'product':product,'booking':booking};
