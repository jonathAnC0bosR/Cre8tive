const Portfolio = require('../models')

const resolvers = {
    Query: {
        portfolioPosts: async () => {
            return Portfolio.find();
        }
    },

    // Mutation: {
    //     uploadImage: async (_, { file }) => {
    //       const { createReadStream } = await file;
    //       const uploadStream = cloudinary.uploader.upload_stream({ folder: 'Cre8tive' });
    
    //       createReadStream().pipe(uploadStream);
    
    //       return new Promise((resolve, reject) => {
    //         uploadStream.on('end', (result) => {
    //           resolve({
    //             publicId: result.public_id,
    //             url: result.secure_url,
    //           });
    //         });
    //         uploadStream.on('error', (error) => reject(error));
    //       });
    //     },
    //   },
}

module.exports = resolvers;