const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    mail:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String, 
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    occupation:{
        type: String,
    },
    location:{
        type: String,
    },
    rating:{
        type: Number
    },
    bulletinPosts:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Bulletin'
        },
    ],
    portfolioPosts:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Portfolio'
        },
    ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;