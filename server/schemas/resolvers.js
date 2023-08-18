const {AuthenticationError} = require('apollo-server-express')
const {Portfolio, User, Bulletin, Skill, Service}  = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    portfolioPosts: async () => {
      return Portfolio.find();
    },
    users: async () => {
        return User.find();
    }, 
    getProfileImg: async (parent, args) => {
      return await User.findById(args.id)
    },
    bulletinPosts: async () => {
      return await Bulletin.find();
    },
    skills: async () => {
      return Skill.find();
    },
    services: async() =>{
      return Service.find();
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email adress");
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    updateProfileImg: async (parent, {id, profileImage}) =>{
      try {
        const updatedUser = await User.findByIdAndUpdate(
          id,
          { profileImage },
          { new: true }
        );
        return updatedUser;
      } catch (error) {
        throw new Error('Error updating profile image');
      }
    }
  },
};

module.exports = resolvers;
