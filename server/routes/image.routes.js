// routes/thing.routes.js

const express = require('express');
const router = express.Router();

// **** require Image model in order to use it ****
const Image = require('../models/Image');

// ********* require fileUploader in order to use it *********
const fileUploader = require('../config/cloudinary.config');

// GET '/api/images' => Route to list all available images
router.get('/images', (req, res, next) => {
  Image.find()
    .then(imagesFromDB => {
      res.status(200).json(imagesFromDB)
    })
    .catch(err => next(err));
});

// POST '/api/upload' => Route that will receive an image, send it to Cloudinary via the fileUploader and return the image URL
router.post('/upload', fileUploader.single('ImageUrl'), (req, res, next) => {
  console.log('file is: ', req.file)

  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  // get the URL of the uploaded file and send it as a response.
  // 'secure_url' can be any name, just make sure you remember to use the same when accessing it on the frontend

  res.json({ secure_url: req.file.path });
});


module.exports = router;
