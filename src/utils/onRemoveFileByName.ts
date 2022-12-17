import fs from "fs";
import path from "path";
import { FILE_STORAGE_DIR_NAME } from "../config";

export const onRemoveFileByName = (filename: string) => {
  fs.readdir(FILE_STORAGE_DIR_NAME, (err: any, files: any) => {
    if (err) throw err;
    for (const file of files) {
      if (file === filename) {
        fs.unlink(path.join(FILE_STORAGE_DIR_NAME, file), (err: any) => {
          if (err) throw err;
        });
      }
    }

  })
  
}