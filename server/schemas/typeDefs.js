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
`;

module.exports = typeDefs;


// type Mutation {
//     uploadImage(file: Upload!): Image
// }

// type Image {
//    publicId: String
//    url: String
// }