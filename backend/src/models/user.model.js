const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    }
});

// show 'users' in mongodb database
// User -> users
module.exports = model('User', userSchema)