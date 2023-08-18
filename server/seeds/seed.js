const db = require('../config/connection');
const {Portfolio, User, Bulletin, Skill, Service} = require('../models');

const portfolioData = require('./portfolioData.json');
const userData= require('./userData.json');
const bulletinData = require('./bulletinData.json');
const skillData = require('./skillData.json');
const serviceData = require('./serviceData.json');

db.once('open', async () => {
    await Portfolio.deleteMany({});
    await User.deleteMany({});
    await Bulletin.deleteMany({});
    await Skill.deleteMany({});
    await Service.deleteMany({});

    const portfolios = await Portfolio.insertMany(portfolioData);
    const users = await User.insertMany(userData);
    const bulletin = await Bulletin.insertMany(bulletinData);
    const skill = await Skill.insertMany(skillData);
    const services = await Service.insertMany(serviceData);

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

    //RANDOMLY ASSIGN SKILLS TO USERS
    for(newSkill of skill){
        const tempUser = users[Math.floor(Math.random() * users.length)];
        tempUser.skills =newSkill._id;
        await tempUser.save();
        //REFERENCE USER ON SKILL
        newSkill.userID.push(tempUser._id);
        await newSkill.save();
    };
   //RANDOMLY ASSIGN SKILLS TO SERVICES
    for(newSkill of skill){
        const tempServices =skill[Math.floor(Math.random() *skill.length)];
        tempServices.skillID = newSkill._id;
        await tempServices.save();
    };
    //TODO:RANDOMLY ASSIGN SERVICES TO BULLETIN POSTS
    for(newBulletin of bulletin){
        const tempBulletin = bulletin[Math.floor(Math.random() * bulletin.length)];
        const tempService = services[Math.floor(Math.random() * services.length)];
        tempBulletin.serviceOffer.push(tempService);
        await tempBulletin.save();
    };

    console.log('Seeded complete 🍃');
    process.exit(0);
});