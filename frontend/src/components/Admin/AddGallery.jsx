import { Button, Typography } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import "./AddGallery.css";
import AdminSidebar from "./AdminSidebar";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  addToGalleryAction,
  allGalleryAction,
  clearErrors,
  deleteGalleryAction,
} from "../../actions/galleryAction";
import {
  GALLERY_DELETE_RESET,
  NEW_GALLERY_RESET,
} from "../../constant/gallery";
import { DataGrid } from "@material-ui/data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import UnauthorizedAccess from "./UnauthorizedAccess";

const AddGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { images, error } = useSelector((state) => state.allGalleryImage);
  const { isLogin } = useSelector((state) => state.adminLogin);

  const dispatch = useDispatch();
  const alert = useAlert();
  const { success, error: addGalleryError } = useSelector(
    (state) => state.addTogallery
  );
  const [image, setImage] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);

  const [galleryTitle, setGalleryTitle] = useState("");
  const navigate = useNavigate();

  const deleteGalleryHandler = (id) => {
    dispatch(deleteGalleryAction(id));
  };
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deletegallery
  );

  // useEffect
  useEffect(() => {
    if (addGalleryError) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Gallery Added Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: NEW_GALLERY_RESET });
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }
    if (isDeleted) {
      alert.success("Message Deleted Successfully");
      dispatch({ type: GALLERY_DELETE_RESET });
      navigate("/admin/dashboard");
    }
  }, [
    dispatch,
    alert,
    isDeleted,
    deleteError,
    addGalleryError,
    error,
    success,
    navigate,
  ]);

  // onsubmit function after adding to form
  const gallerySubmit = (e) => {
    e.preventDefault();

    const myFormData = new FormData();
    myFormData.set("galleryTitle", galleryTitle);

    image.forEach((images) => {
      myFormData.append("images", images);
    });

    dispatch(addToGalleryAction(myFormData));
  };

  // onchange function for images and input field
  const registerOnChange = (e) => {
    // const files = Array.from(e.target.files);
    // setImage([]);
    // setImagePreview([]);

    // files.forEach((file) => {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setImagePreview((old) => [...old, reader.result]);
    //       setImage((old) => [...old, reader.result]);
    //     }
    //   };
    //   reader.readAsText(file);
    //   console.log("here file.name >> " + file.name);
    //   console.log("here file >> " + file);
    //   // image.push(URL.createObjectURL(file));
    // });

    imagePreview.length = 0;
    setImagePreview(imagePreview);
    image.length = 0;
    setImage(image);
    const file = e.target.files;
    for (const item of file) {
      image.push(item);
    }

    setImage(image);
    image.forEach((file) => {
      imagePreview.push(URL.createObjectURL(file));
      console.log(file.name);
    });
    setImagePreview(imagePreview);
  };

  // List of all images

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(allGalleryAction());
  }, [error, dispatch, alert]);

  const rows = [];
  const columns = [
    {
      field: "id",
      headerName: "Gallery Id",
      minWidth: 180,
      flex: 0.2,
    },
    {
      field: "galleryTitle",
      headerName: "Gallery Title",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "actions",
      headerName: "Actions",
      flex: 0.2,
      type: "number",
      minWidth: 150,
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            {/* <Link to={`/event/${events.events.id}`}>
              <Button>
                <ExitToAppIcon />
              </Button>
            </Link> */}

            <Button
              onClick={() =>
                deleteGalleryHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  images.images &&
    images.images.forEach((item, index) => {
      rows.push({
        id: item.id,
        galleryTitle: item.galleryTitle,
      });
    });

  return (
    <Fragment>
      <section className="adminGalleryContainer"></section>
      {localStorage.getItem("token") ? (
        <Fragment>
          <section className="adminGalleryContainer1">
            <div className="adminSidebar">
              <AdminSidebar />
            </div>

            <div className="formContainer">
              <h1 className="galleryFormHeading">Add To Gallery</h1>
              <form
                className="galleryForm"
                onSubmit={gallerySubmit}
                encType="multipart/form-data"
              >
                <div className="form__group">
                  <label htmlFor="title" className="inputTitle">
                    Gallery Title:
                  </label>
                  <div className="formgroup__text">
                    <InsertPhotoIcon className="insertPhotoIcon__input" />
                    <input
                      type="text"
                      placeholder="Gallery Title"
                      value={galleryTitle}
                      onChange={(e) => setGalleryTitle(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form__group1 formgroup__image">
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerOnChange}
                    multiple
                  />
                  <Typography variant="subtitle2" className="noteImage">
                    ( use 600 * 600 pixel size image upto 1mb )
                  </Typography>
                </div>

                <Button
                  variant="contained"
                  className="formSubmit__gallery"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </div>

            <Carousel className="Carousel">
              {imagePreview.map((item, index) => (
                <img
                  className="carouselPreview"
                  key={index}
                  src={item}
                  alt=""
                />
              ))}
            </Carousel>
          </section>

          <section className="allEventsList">
            <div className="messageGrid eventGrid">
              <h1 className="allmessagesHeading">All Events List</h1>

              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
                className="messageListTable"
                autoHeight
              />
            </div>
          </section>
        </Fragment>
      ) : (
        <UnauthorizedAccess />
      )}
    </Fragment>
  );
};

export default AddGallery;
