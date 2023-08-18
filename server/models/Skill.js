const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillSchema = new Schema({
    skillTitle:{
        type: String,
        required: true,
    },
    userID:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Skill = mongoose.model('Skill', skillSchema );

module.exports = Skill;