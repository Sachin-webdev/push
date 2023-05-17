import { Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import GalleryGrid from "../Layouts/GalleryGrid";
import "./Gallery.css";
import { useDispatch, useSelector } from "react-redux";
import { allGalleryAction, clearErrors } from "../../actions/galleryAction";
import { useAlert } from "react-alert";
const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { images, error } = useSelector((state) => state.allGalleryImage);
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(allGalleryAction());
  }, [alert, dispatch, error]);

  return (
    <Fragment>
      <div className="container">
        <section className="galleryContainer">
          <div className="gallery__headingContainer">
            <Typography className="gallery__heading" variant="h2">
              Gallery
            </Typography>
          </div>
        </section>

        <section className="gallery__imageContainer">
          <div className="gallery__imageGrid">
            <GalleryGrid GalleryContents={images.images} />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Gallery;
