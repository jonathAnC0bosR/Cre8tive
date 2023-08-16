// require('dotenv').config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "elwiiman",
  api_key: "737348479665862",
  api_secret: "Rf_u_IxwM4yrK6cqU0E2A2n4yGo",
});

async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    folder: "test",
  });
  return res;
}

module.exports = { cloudinary, handleUpload };
