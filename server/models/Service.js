const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema({
    serviceTitle:{
        type: String,
        required: true,
        trim: true
    },
    serviceDescription:{
        type: String,
        required: true,
        trim: true
    },
    userID:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    skillID:{
        type: Schema.Types.ObjectId,
        ref: 'Skill'
    },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service ;