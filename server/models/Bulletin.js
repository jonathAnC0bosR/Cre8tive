const mongoose = require('mongoose');
const { Schema } = mongoose;
const  {serviceSchema } = require('./Service');

const bulletinSchema = new Schema({
    bulletPostTitle: {
        type: String,
        required: true,
        trim: true
    },
    serviceOffer:[serviceSchema],

    serviceExpectation:[serviceSchema],

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