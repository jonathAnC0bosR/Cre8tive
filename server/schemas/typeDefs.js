const typeDefs = `
    type Portfolio {
        _id: ID
        postTitle: String
        postContent: String
        createdAt: String
        comments: String
    }

    type Query {
        portfolioPosts: [Portfolio]
    }

    type Mutation {
        uploadImage(file: Upload!): Image
    }

    type Image {
       publicId: String
       url: String
    }
`;

module.exports = typeDefs;
