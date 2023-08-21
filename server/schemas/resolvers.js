const {AuthenticationError} = require('apollo-server-express')
const {Portfolio, User, Bulletin, Skill, Service}  = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Bulletin: {
    userID: async (parent) => {
      // Fetch the user associated with the bulletin using parent.userID
      const user = await User.findById(parent.userID);
      return user;
    },
  },
  User: {
    bulletinPosts: async (parent) => {
      // Fetch the bulletin posts associated with the user using parent._id
      const bulletins = await Bulletin.find({ userID: parent._id });
      return bulletins;
    },
  },


  Query: {
    portfolioPosts: async () => {
      return Portfolio.find();
    },
    users: async () => {
        return User.find();
    }, 

    getProfileImg: async (parent, args) => {
      try {
        const user = await User.findById(args.id);
        return user;
      } catch (error) {
        throw new Error('Error fetching profile image');
      }
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
    },
    updateUser: async (parent, args) => {
        return await User.findByIdAndUpdate(args._id, args, {
          new: true
        })
    },

    addBBPost: async (parent, args) => {
      try {
        const newPost = await Bulletin.create(args);
      return newPost;
    } catch (error) {
      throw new Error('Failed to create bulletin');
    }

    },

    acceptBulletin: async (parent, {_id, acceptingUser}) =>{
      try {
        const activatedBulletin = await Bulletin.findByIdAndUpdate(
          _id,
          { isActive:true },
          {acceptingUser },
          { new: true }
        );
        return activatedBulletin;
      } catch (err) {
        throw new Error('error in activating the Bulletin post');
      }
    },

    deleteBBPost: async (parent, { BBPostId }) => {
      try {
        const deletedBulletin = await Bulletin.findOneAndDelete({ _id: BBPostId });
        if (!deletedBulletin) {
            throw new Error('Bulletin not found'); // Add more specific error message
        }
        return deletedBulletin;
      } catch (error) {
        throw new Error('Failed to delete bulletin');
      }
    },

  },
};

module.exports = resolvers;
