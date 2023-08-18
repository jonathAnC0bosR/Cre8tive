// routes/Imageroutes.js

const express = require('express');
const router = express.Router();

//----------- Cloudinary:
const { handleUpload } = require("../config/cloudinaryConfig");
// --  Multer:
const { myUploadMiddleware, runMiddleware } = require("../middlewares/multer");
//-----------

// **** require Image model in order to use it ****
const Image = require('../models/Image');

//----------- /api/upload
router.post("/upload", async (req, res) => {
  try {
    await runMiddleware(req, res, myUploadMiddleware);
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    console.log("-------------- Image uploaded to Cloudinary successfully!");
    const myUrl = cldRes.secure_url;
    res.json(myUrl);
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
});
//-----------

module.exports = router;

