const mongoose = require('mongoose');
const { Schema } = mongoose;
const   Service= require('./Service');

const bulletinSchema = new Schema({
    bulletPostTitle: {
        type: String,
        required: true,
        trim: true
    },
    serviceOffer:[Service.schema],

    serviceExpectation:[Service.schema],

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