const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

//----------- Cloudinary:
const cloudinary = require('./config/cloudinaryConfig'); 
// --  Multer: 
const multerUploads = require('./middlewares/multer')
//-----------

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//-----------
app.post('/upload', multerUploads, async (req, res) => {
//   try {
//     if (req.file) {
//       const result = await cloudinary.uploader.upload(req.file.buffer, {
//         folder: 'Cre8tive' // Optional folder name in Cloudinary
//       });

//       return res.status(200).json({
//         message: 'Image uploaded to Cloudinary',
//         data: {
//           imageUrl: result.secure_url
//         }
//       });
//     } else {
//       return res.status(400).json({
//         message: 'No image file provided'
//       });
//     }
//   } catch (err) {
//     console.error('Error:', err);
//     return res.status(500).json({
//       message: 'Error uploading image to Cloudinary',
//       error: err.message
//     });
//   }
try {
  if (!req.file) {
    return res.status(400).json({ message: 'No image file provided' });
  }
  const result = await cloudinary.uploader.upload_stream({
    folder: 'Cre8tive', // You can customize the folder where images will be stored in Cloudinary
    public_id: `image_${Date.now()}`, // Use a unique ID for each image
    format: 'jpg' // You can specify the desired format of the uploaded image
  }, (error, result) => {
    if (error) {
      return res.status(500).json({ message: 'Error uploading image to Cloudinary' });
    }
    res.status(200).json({ message: 'Image uploaded successfully', imageUrl: result.secure_url });
  });
  //console.log(result)
  req.file.buffer.pipe(result);
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Internal server error' });
}
 }
);

//-----------


const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/graphql', expressMiddleware(server));

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  } 

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();