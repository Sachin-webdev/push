import { Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./GalleryContent.css";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { singleGalleryAction } from "../../actions/galleryAction";
import { clearErrors } from "../../actions/galleryAction";
const GalleryContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { error, gallery } = useSelector((state) => state.gallery);
  const baseUrl = "http://localhost:9000/files/gallery/";
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(singleGalleryAction(id));
  }, [error, dispatch, alert, id]);

  return (
    <Fragment>
      <div className="container galleryContent">
        <section className="galleryContentContainer">
          <div className="gallery__headingContainer1">
            <Typography className="gallery__contentHeading" variant="h2">
              {gallery.galleryTitle}
            </Typography>
          </div>
        </section>

        <section
          className="section__2"
          style={{ marginTop: "10rem", backgroundColor: "white" }}
        >
          <div className="container div__card">
            {gallery.filename &&
              gallery.filename.map((item, index) => (
                <div className="image__card">
                  <img
                    className="card image__grid__gallery"
                    key={index}
                    src={baseUrl + item}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default GalleryContent;
