import { NextFunction, Request, Response } from "express";
import { connectDB } from "../ormconfig";
import { Gallery } from "../entities/Gallery";

const galleryrepo = connectDB.getRepository(Gallery);

// Add new gallery
export const addToGallery = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    if (req.files) {
      data.images = req.files.map(function (item: any, index: number) {
        return item.filename;
      });
    }
    let gallery = new Gallery();
    var files: any = [];
    data.images.map((img: any) => files.push(img));
    gallery.filename = files;
    gallery.galleryTitle = req.body.galleryTitle;

    const images = await galleryrepo.save(gallery);
    console.log(images);
    res.status(201).json({
      images,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      error: "An error occured during file upload",
    });
  }
};

// get all gallery
export const fetchData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const images: any = await galleryrepo.find();
    res.json({
      images,
    });
  } catch (err) {
    return next(err);
  }
};

// get single gallery
export const getGalleryContents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const gallery: any = await galleryrepo.findOneBy({ id: +req.params.id });

  if (!gallery) {
    return "Error";
  }
  res.status(200).json({
    success: true,
    gallery,
  });
};



// deleting gallery
export const deleteGallery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  await galleryrepo.delete(req.params.id);

  res.status(200).json({
    success: true,
  });
};