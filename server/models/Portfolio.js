const mongoose = require("mongoose");
const { Schema } = mongoose;

const portfolioSchema = new Schema({
    postTitle: {
        type: String,
        required: true,
        trim: true
    },  
    postContent: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: {
        type: String
    }
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;