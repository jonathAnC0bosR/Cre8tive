const mongoose = require('mongoose');
const { Schema } = mongoose;
 
const imageSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String
  },
  {
    timestamps: true
  }
);
 
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;