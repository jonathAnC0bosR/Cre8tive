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
        serviceOffer: String
        serviceExpectation: String
        createdAt: String
        userID(_id: ID!):User
    }

    type User {
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
        profileImage: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        portfolioPosts: [Portfolio]
        bulletinPosts: [Bulletin]
        users: [User]
        getProfileImg(id: ID!): String
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateProfileImg(id: ID!, profileImage: String!): User
    }
`;

module.exports = typeDefs;
