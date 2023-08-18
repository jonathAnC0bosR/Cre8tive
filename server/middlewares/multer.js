const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });
const myUploadMiddleware = upload.single("image");

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

module.exports = { myUploadMiddleware, runMiddleware };