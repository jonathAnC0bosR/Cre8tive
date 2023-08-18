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
        serviceOffer: [Service]
        serviceExpectation: [Service]
        createdAt: String
        userID(_id: ID!):User
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        age: Int
        occupation: String
        location: String
        rating: Int
        skills(_id: ID!): Skill
        bulletinPosts(_id: ID!): Bulletin
        portfolioPosts(_id: ID!): Portfolio
    }

    type Skill {
        _id: ID
        skillTitle: String
        userID(_id: ID!): User
    }

    type Service {
        _id: ID
        serviceTitle: String
        serviceDescription: String
        userID(_id: ID!): User
        skillID(_id: ID!): Skill
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        portfolioPosts: [Portfolio]
        bulletinPosts: [Bulletin]
        users: [User]
        skills: [Skill]
        services:[Service]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
