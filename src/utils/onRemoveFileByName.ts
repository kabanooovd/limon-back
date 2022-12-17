import fs from "fs";
import path from "path";

export const onRemoveFileByName = (filename: string) => {
  const directory = "static";
  fs.readdir(directory, (err: any, files: any) => {
    if (err) throw err;
    for (const file of files) {
      if (file === filename) {
        fs.unlink(path.join(directory, file), (err: any) => {
          if (err) throw err;
        });
      }
    }

  })
  
}