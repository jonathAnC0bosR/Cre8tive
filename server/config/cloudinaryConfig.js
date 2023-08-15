require('dotenv').config();
const { config, uploader } = require('cloudinary');
const multer = require('multer');

const cloudinaryConfig = (req, res, next) => {
    try {
        config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
        console.log("config cloudinary..........")
        next();
    } catch (err){
        console.log("ERROR CLOUDINARY CONFIG!!!!!!!!!!!")
    }
}
module.exports = { cloudinaryConfig, uploader };

//--------------
// const cloudinary = require("cloudinary").v2;
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
// export async function handleUpload(file) {
//   const res = await cloudinary.uploader.upload(file, {
//     resource_type: "auto",
//   });
//   return res;
// }
