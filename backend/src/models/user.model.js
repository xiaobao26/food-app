const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: function() {
            return this.provider === 'email';
        },
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
    provider: {
        type: String,
        required: true,
        unique: ['google', 'email'],
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
}, {
    collection: 'users',
    timestamps: true,
});

// Pre-save middleware to hash password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = model('User', userSchema);
