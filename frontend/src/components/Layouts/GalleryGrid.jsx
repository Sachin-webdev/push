import { Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import "./GalleryGrid.css";
import { Link } from "react-router-dom";

const GalleryGrid = ({ GalleryContents }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const baseUrl = "http://localhost:9000/files/gallery/";
  return (
    <Fragment>
      {GalleryContents &&
        GalleryContents.map((item, index) => (
          <div key={index} className="card image__grid">
            <div className="galleryGrid__image">
              <Link to={`/gallery/gallery/${item.id}`}>
                <img
                  className="galleryImage"
                  src={baseUrl + item.filename[1]}
                  alt={item.galleryTitle}
                />
              </Link>
            </div>

            <div className="galleryGrid__heading">
              <Link
                className="gallery__Title"
                to={`/gallery/gallery/${item.id}`}
              >
                <Typography variant="h6" className="galleryTitle">
                  {item.galleryTitle}
                </Typography>
              </Link>
            </div>
          </div>
        ))}
    </Fragment>
  );
};

export default GalleryGrid;
