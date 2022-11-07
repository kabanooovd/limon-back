import multer from "multer";

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './static')
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
  }
})