const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

//----------- Cloudinary:
const { cloudinaryConfig, uploader } = require('./config/cloudinaryConfig'); //cloudinary config medium 
// --  Multer: 
// const { multerUploads, dataUri } = require('./middlewares/multer') //multer require 1 medium
const multerUploads = require('./middlewares/multer') //multer require 2 medium
const multer = require('multer');
const Datauri = require('datauri');
// -- Multer 2: 
// const storage = multer.memoryStorage();
// const upload = multer({ storage });
// const myUploadMiddleware = upload.single("sample_file");

//-----------

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//-----------
app.use('*', cloudinaryConfig);
app.post('/upload', multerUploads, async (req, res) => {
  try {
    const dUri = new Datauri();
    // const dataUrifun = req => 
    //   dUri.format(path.extname(req.file.originalname).toString(), 
    //   req.file.buffer);
    // const fileUri = dUri.format(
    //   path.extname(req.file.originalname).toString(), 
    //   req.file.buffer
    // );
    console.log(req.file)
    if (req.file) {

      const fileUri = dUri.format( 
      req.file.buffer, 'image/jpeg'
      );
      // const file = await dataUrifun(req).content;
      const imageUploadResult = await uploader.upload(fileUri.content);
      const image = imageUploadResult.url;

      return res.status(200).json({
        message: 'Your image has been uploaded successfully to Cloudinary',
        data: {
          image
        }
      });
    }
  } catch (err) {
    console.error('Error:', err);
    return res.status(400).json({
      message: 'Something went wrong while processing your request',
      data: {
        err
      }
    });
  }
});

//-----------


const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  //----------
  //app.use('*', cloudinaryConfig);
  //----------

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