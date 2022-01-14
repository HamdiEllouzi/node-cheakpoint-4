const mongoose = require('mongoose');
const personSchema = require('./person.js');
require('dotenv').config();
const url = process.env.ATLAS_URI;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database connection successful')
}).catch(err => {
    console.error('Database connection error')
})/*
const person = new personSchema({
    name: "afef",
    age: 42,
})
person.save(function (err, data) {
    console.log(data);
})
personSchema.create([
    {
        name: "hamdi",
        age: 32,
    },
    {
        name: "chiheb",
        age:48
    }
]).then((d) => console.log(d))*/
personSchema.find().then(d =>{
    console.log('find',d);
 })
 personSchema.findById("61e19e0710178aa0757c5425").then(d =>{
     console.log('find by id',d);
 })
 