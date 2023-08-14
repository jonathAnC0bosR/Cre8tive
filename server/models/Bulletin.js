const mongoose = require('mongoose');
const { Schema } = mongoose;

const bulletinSchema = new Schema({
    bulletPostTitle: {
        type: String,
        required: true,
        trim: true
    },
    offert:{
        type: String,
        required: true,
        trim: true
    },
    expectation:{
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userID:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Bulletin = mongoose.model('Bulletin', bulletinSchema);

module.exports = Bulletin;