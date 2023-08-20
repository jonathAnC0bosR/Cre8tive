const mongoose = require('mongoose');
const { Schema } = mongoose;
const   Service= require('./Service');

const bulletinSchema = new Schema({
    bulletPostTitle: {
        type: String,
        required: true,
        trim: true
    },
    bulletText:{
        type: String,
    }, 

    serviceOffer:[Service.schema],

    serviceNeed:[Service.schema],

    deliveryTime: {
        type: String,
    },

    imageURL: {
        type: String,
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    userID:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    ,acceptingUser:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    isActive:{
        type:Boolean,
        default: false
    }
});

const Bulletin = mongoose.model('Bulletin', bulletinSchema);

module.exports = Bulletin;