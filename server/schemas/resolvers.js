const Portfolio = require('../models')

const resolvers = {
    Query: {
        portfolioPosts: async () => {
            return Portfolio.find();
        }
    }
}

module.exports = resolvers;