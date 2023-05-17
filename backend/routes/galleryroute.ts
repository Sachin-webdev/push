import express from "express";
import {
  addToGallery,
  deleteGallery,
  fetchData,
  getGalleryContents,
} from "../controller/gallerycontroller";
import { upload } from "../middleware/uploader";
import { AuthenticatedUser } from "../controller/admincontroller";

const router = express.Router();

router
  .route("/gallery/new")
  .post(AuthenticatedUser, upload.array("images"), addToGallery);

// fetch all images of gallery
router.route("/gallery/images").get(fetchData);
router
  .route("/gallery/image/:id")
  .get(getGalleryContents)
  .delete(deleteGallery);

module.exports = router;
