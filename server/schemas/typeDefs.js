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
        bulletText: String
        serviceOffer: [Service]
        serviceNeed: [Service]
        deliveryTime: String
        imageURL: String
        createdAt: String
        userID:User
        acceptingUser: User
        isActive: Boolean
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
        aboutMe: String
        github: String
        artStation: String
        skills(_id: ID!): Skill
        bulletinPosts(_id: ID!): [Bulletin]
        portfolioPosts(_id: ID!): [Portfolio]
        profileImage: String
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
        getProfileImg(id: ID!): User
        skills: [Skill]
        services:[Service]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateProfileImg(id: ID!, profileImage: String!): User
        updateUser(_id:ID!, aboutMe: String, location:String, occupation:String, age:String, username:String):User
        addBBPost(
            bulletPostTitle: String!,  
            bulletText: String!, 
            serviceOffer: [ID], 
            serviceNeed: [ID], 
            deliveryTime: String, 
            imageURL: String, 
            createdAt: String, 
            userID: ID
        ): Bulletin, 
        acceptBulletin(
            id: ID!,
            acceptingUser: ID!) 
        : Bulletin
        deleteBBPost(bulletinId: ID!): DeleteBulletinResponse!
    }
    type DeleteBulletinResponse {
        success: Boolean!
        message: String
    }
`;

module.exports = typeDefs;

//b4
// deleteBBPost(_id:ID!):Bulletin, 
