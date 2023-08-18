const db = require('../config/connection');
const {Portfolio, User, Bulletin} = require('../models');

const portfolioData = require('./portfolioData.json');
const userData= require('./userData.json');
const bulletinData = require('./bulletinData.json');

db.once('open', async () => {
    await Portfolio.deleteMany({});
    await User.deleteMany({});
    await Bulletin.deleteMany({});

    const portfolios = await Portfolio.insertMany(portfolioData);
    const users = await User.insertMany(userData);
    const bulletin = await Bulletin.insertMany(bulletinData);

    //RANDOMLY ASSIGN A PORTFOLIO POST TO A USER
    for(newPortfolio of portfolios){
        const tempUser = users[Math.floor(Math.random() * users.length)];
        tempUser.portfolioPosts.push(newPortfolio._id);
        await tempUser.save();
    //REFERENCE USER ON PORTFOLIO POST
    newPortfolio.userID = tempUser._id;
    await newPortfolio.save();
    };
    //RANDOMLY ASSIGN A BULLETIN POST TO A USER
    for(newBulletin of bulletin){
        const tempUser = users[Math.floor(Math.random() * users.length)];
        tempUser.bulletinPosts.push(newBulletin._id);
        await tempUser.save();
        //REFERENCE USER ON BULLETIN POST
        newBulletin.userID = tempUser._id;
        await newBulletin.save();
    };

    //TODO: RANDOMLY ASSIGN SKILLS TO USERS

    //TODO: RANDOMLY ASSIGN SKILLS TO SERVICES

    //TODO:RANDOMLY ASSIGN SERVICES TO BULLETIN POSTS

    console.log('Seeded complete 🍃');
    process.exit(0);
});