import { Schema, model } from 'mongoose';


const sessionSchema = new Schema({
    sessionToken: {
        type: String,
        //@unique 
        unique: true,
        required: true,
        // @map("session_token")
    },
    userId: {
        // @map("user_id")
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    expires: {
        type:Date,
        required: true,
    }  
}, {
    collection: 'sessions',
    timestamps: true,
})


module.exports = model('Session', sessionSchema);