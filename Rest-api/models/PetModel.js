const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const petSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        match : [/^https?:\/\//, 'Inavalid image Url']
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    age: {
        type: Number,
        required: true,
        minLength: [0, 'The age cant be negative digit'],
        maxLength : [100, 'Inavlid age']
    },
    location: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'The description is too short']

    },
    owner: {
        type: ObjectId,
        ref: "User"
    },
} );

module.exports = mongoose.model('Pet', petSchema);
