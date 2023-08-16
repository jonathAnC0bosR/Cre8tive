const typeDefs = `
    type Portfolio {
        _id: ID
        postTitle: String
        postContent: String
        createdAt: String
        comments: String
        userID(_id: ID!):User
    }

    type Bulletin{
        _id: ID
        bulletPostTitle: String
        offert: String
        expectation: String
        createdAt: String
        userID(_id: ID!):User
    }

    type User{
        _id: ID
        username: String
        mail: String
        password: String
        age: Int
        occupation: String
        location: String
        rating: Int
        bulletinPosts(_id: ID!): Bulletin
        portfolioPosts(_id: ID!): Portfolio
    }

    type Query {
        portfolioPosts: [Portfolio]
        bulletinPosts: [Bulletin]
        user: User
    }
`;

module.exports = typeDefs;
