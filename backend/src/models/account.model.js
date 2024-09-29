import { Schema, model } from 'mongoose';

const accountSchema = new Schema({
    provider: {
        type: String,
        required: true,
    },
    type: {
        type:String,
        required: true,
    },
    providerAccountId: {
        type: String,
        required: true,
        // @map("provider_account_id")
    },
    refresh_token: {
        type: String,
        // @db.Text
    },
    access_token: {
        type: String,
        //@db.Text
    },
    expires_at: {
        type: Number,
    },
    token_type: {
        type: String,
    },
    scope: {
        type: String,
    },
    id_token: {
        type: String,
        // @db.Text
    },
    session_state: {
        type: String,
    },
    userId: {
        type:Schema.Types.ObjectId,
        //  @map("user_id")
        ref: 'User',
        required: true,
    }
}, {
    // Prisma @@map("accounts")
    collection: 'accounts',
    // Adds createdAt and updatedAt timestamps
    timestamps: true,  
});

//     @@unique([provider, providerAccountId])
accountSchema.index({ provider: 1, providerAccountId: 1 }, { unique: true })

module.exports = model('Account', accountSchema)