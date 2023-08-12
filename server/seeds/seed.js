const db = require('../config/connection');
const Portfolio = require('../models');

const portfolioData = require('./portfolioData.json');

db.once('open', async () => {
    await Portfolio.deleteMany({});

    const portfolios = await Portfolio.insertMany(portfolioData);

    console.log('Seeded complete 🍃');
    process.exit(0);
})