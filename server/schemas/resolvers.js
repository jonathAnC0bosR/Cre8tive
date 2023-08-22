const { AuthenticationError } = require('apollo-server-express')
const { Portfolio, User, Bulletin, Skill, Service } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Bulletin: {
    userID: async (parent) => {
      // Fetch the user associated with the bulletin using parent.userID
      const user = await User.findById(parent.userID);
      return user;
    },
    // serviceOffer: async (parent) => {
    //   // Populate the serviceOffer field with Skill data including skillTitle
    //   const skills = await Skill.find({ _id: { $in: parent.serviceOffer } });
    //   return skills;
    // },
    // serviceNeed: async (parent) => {
    //   // Populate the serviceNeed field with Skill data including skillTitle
    //   const skills = await Skill.find({ _id: { $in: parent.serviceNeed } });
    //   return skills;
    // },
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

    getUsers: async (parent, args) => {
      try {
        const allUsers = await User.find();
        return allUsers;
      } catch (error){
        throw new Error('Error fetching users');
      }  
    }, 

    getUser: async (parent, args) => {
      try {
        const getSingleUser = await User.findById(args.id);
        return getSingleUser;
      } catch (error) {
        throw new Error('Error fetching profile image');
      }
    },

    getProfileImg: async (parent, args) => {
      try {
        const user = await User.findById(args.id).populate('skills');
        return user;
      } catch (error) {
        throw new Error('Error fetching profile image');
      }
    },

    bulletinPosts: async () => {
      return await Bulletin.find()
        .populate(
          {
            path: 'serviceNeed serviceOffer', // Specify the paths to populate
            select: 'skillTitle' // Only select the skillTitle field
          }
        )
        ;
    },
    skills: async () => {
      return Skill.find();
    },
    services: async () => {
      return Service.find();
    },

    getBulletinsByServiceOffer: async (_, { skillTitle }) => {
      try {
        const skill = await Skill.findOne({ skillTitle });
        if (!skill) {
          return [];
        }

        const bulletins = await Bulletin.find({
          serviceOffer: skill._id,
        }).populate('serviceOffer').populate('serviceNeed');

        return bulletins;
      } catch (error) {
        throw new Error('Error fetching bulletins: ' + error.message);
      }
    },

    getBulletinsByServiceNeed: async (_, { skillTitle }) => {
      try {
        const skill = await Skill.findOne({ skillTitle });
        if (!skill) {
          return [];
        }

        const bulletins = await Bulletin.find({
          serviceNeed: skill._id,
        }).populate('serviceOffer').populate('serviceNeed');

        return bulletins;
      } catch (error) {
        throw new Error('Error fetching bulletins: ' + error.message);
      }
    },


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
    updateProfileImg: async (parent, { id, profileImage }) => {
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

    acceptBulletin: async (parent, { id, acceptingUser }) => {
      try {
        const activateBulletin = await Bulletin.findByIdAndUpdate(
          id,
          { acceptingUser, isActive: true },
          { new: true }
        );
        return activateBulletin;
      } catch (err) {
        throw new Error('error in activating Bulletin post');
      }
    },

    deleteBBPost: async (parent, { bulletinId }) => {
      try {
        const deletedBulletin = await Bulletin.findByIdAndDelete(bulletinId);
        return {
          success: true,
          message: "Deleted Post"
        }
          ;

      } catch (error) {
        throw new Error('Failed to delete bulletin');
      }
    },

    addSkillsToBulletinServiceOffer: async (_, { bulletinId, skillIds }) => {
      try {
        const bulletin = await Bulletin.findById(bulletinId);
        const skills = await Skill.find({ _id: { $in: skillIds } });
        bulletin.serviceOffer.push(...skillIds);
        await bulletin.save();

        return bulletin;
      } catch (error) {
        throw new Error('Error adding skills to bulletin: ' + error.message);
      }
    },

    addSkillsToBulletinServiceNeed: async (_, { bulletinId, skillIds }) => {
      try {
        const bulletin = await Bulletin.findById(bulletinId);
        const skills = await Skill.find({ _id: { $in: skillIds } });
        bulletin.serviceNeed.push(...skillIds);
        await bulletin.save();

        return bulletin;
      } catch (error) {
        throw new Error('Error adding skills to bulletin: ' + error.message);
      }
    },

  },
};

module.exports = resolvers;
