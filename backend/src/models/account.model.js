import { Schema, model } from 'mongoose';

const AccountSchema = new Schema({
    provider: {
        type: String, required: true 
    },
    type: { 
        type: String, required: true 
    },
    providerAccountId: { 
        type: String, required: true 
    },
    access_token: { 
        type: String 
    },
    expires_at: { 
        type: Number 
    },
    scope: { 
        type: String 
    },
    token_type: { 
        type: String 
    },
    id_token: { 
        type: String 
    },
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true 
    },
});

const Account = model('Account', AccountSchema);

export default Account;
