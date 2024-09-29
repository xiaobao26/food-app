import { Schema, model } from "mongoose";


const verificationTokenSchema = new Schema({
    identifier: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    expires: {
        type: Date,
        required: true
    }
}, {
    collection: 'verificationtokens',
    timestamps: true
});

verificationTokenSchema.index({ identifier: 1, token: 1 }, { unique: true });

module.exports = model('VerificationToken', verificationTokenSchema);