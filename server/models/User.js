const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  occupation: {
    type: String,
  },
  location: {
    type: String,
  },
  rating: {
    type: Number,
  },
  bulletinPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Bulletin",
    },
  ],
  portfolioPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Portfolio",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
