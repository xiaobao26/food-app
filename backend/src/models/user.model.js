const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensuring the email is unique
    },
    emailVerified: {
        type: Date,  // If using email verification
        default: null,
    },
    image: {
        type: String,  // Profile picture URL from Google
        default: null,
    },
    phoneNumber: {
        type: String,  // Custom field you want to add
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = model('User', userSchema);
