import { Request } from "express";
import multer from "multer";
import path from "path";

// FIle upload
function myFilter(req: any, file: any, cb: any) {
  var mimeType = file.mimetype.split("/")[0];
  console.log("this is my file from frontend:", file);
  if (mimeType === "image") {
    cb(null, true);
    console.log("this is my file from frontend: from if>>", file);
  } else {
    req.fileTypError = true;
    cb(null, false);
    console.log("this is my file from frontend:from else>>", file);
  }
}

// Taking complete control of file upload
const myStorage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, path.join(process.cwd(), "/backend/uploads/gallery"));
    console.log(
      "this is my file from frontend:from multer.diskstorage destination>>",
      file
    );
  },
  filename: function (req: Request, file: any, cb: any) {
    cb(null, Date.now() + "-" + file.originalname);
    console.log(
      "this is my file from frontend:from multer.diskstorage filename>>",
      file
    );
  },
});

export const upload = multer({
  storage: myStorage,
  fileFilter: myFilter,
});

// module.exports = uplaod;
