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
  firstName: {
    type: String,
  },
  lastName: {
    type:String,
  },
  occupation: {
    type: String,
  },
  location: {
    type: String,
  },
  aboutMe: {
    type: String,
  },
  github: {
    type: String,
  },
  artStation: {
    type: String,
  },
  rating: {
    type: Number,
  },
  skills: {
    type: Schema.Types.ObjectId,
    ref: "Skill",
  },
  bulletinPosts: [ //(IF OFFERING A JOB)
    {
      type: Schema.Types.ObjectId,
      ref: "Bulletin",
    },
  ],
  ActiveJobs:[//IF ACCEPTED A JOB
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
  profileImage: {
    type: String,
    default:
      "https://res.cloudinary.com/dafx57m43/image/upload/v1692499672/Cre8tive/lcav0tseedyuftfnpuxf.jpg",
  },
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
