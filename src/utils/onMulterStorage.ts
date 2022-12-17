import multer from "multer";
import path from "path";
import fs from "fs";
import { FILE_STORAGE_DIR_NAME } from "../config";

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./${FILE_STORAGE_DIR_NAME}`)
  },
  filename: function (req, file, cb) {
    const staticPath = path.resolve(`${FILE_STORAGE_DIR_NAME}`)
    if (!fs.existsSync(staticPath)) {
      fs.mkdirSync(staticPath, { recursive: true });
    }
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now() + '.' + extension)
  }
})