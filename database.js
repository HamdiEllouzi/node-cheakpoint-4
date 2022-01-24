const mongoose = require('mongoose');
const personSchema = require('./person.js');
require('dotenv').config();
const url = process.env.ATLAS_URI;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database connection successful');
}).catch(err => {
    console.error('Database connection error');
});
const person = new personSchema({
    name: "afef",
    age: 42,
});

person.save(function (err, data) {
    console.log(data);
})
personSchema.create([
    {
        name: "hamdi",
        age: 32,
        favoriteFoods: ['couscous', 'burritos']
    },
    {
        name: "Mary",
        age: 22,
        favoriteFoods: []
    },
    {
        name: "Mary",
        age: 62,
        favoriteFoods: []
    },
    {
        name: "chiheb",
        age: 48,
        favoriteFoods: ['spageti', 'burritos']
    },
    {
        name: "ali",
        age: 34,
        favoriteFoods: ['hamburger', 'pizza']
    },
    {
        name: "ahmed",
        age: 50,
        favoriteFoods: ['tacos', 'salad', 'burritos']
    }
]).then((d) => console.log(d))
personSchema.find().then(d => {
    console.log('find', d);
})
personSchema.findById("61eea820a722b59df8b18163").then(d => {
    console.log('find by id', d);
})
personSchema.findById("61e19e0710178aa0757c5425").then(d => {
    d.favoriteFoods.push('hamburger');
    d.save()
    console.log(d);
}).catch(console.log('no person '))
personSchema.findOneAndUpdate({ name: 'hamdi' }, { age: 30 }).then(d => {
    console.log('find and update', d);
})
personSchema.findByIdAndRemove('61e19e0710178aa0757c5425').then(d => {
    console.log('delete', d);
})
personSchema.remove({ name: "Mary" }).then(d => {
    console.log('deleted', d);
})
personSchema.find({ favoriteFoods: 'burritos' })
    .sort({ name: 1 }).limit(2).select({ age: false }).exec().then(docs => console.log(docs))
