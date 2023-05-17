import { Button, Typography } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import "./AddGallery.css";
import AdminSidebar from "./AdminSidebar";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  clearErrors,
  deleteEventAction,
  getAllEvent,
} from "../../actions/eventAction";
import "./AddEvent.css";
import { DataGrid } from "@material-ui/data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import EventIcon from "@mui/icons-material/Event";
import {
  EVENT_DELETE_RESET,
  NEW_EVENT_RESET,
} from "../../constant/eventConstant";
import { postEvent } from "../../actions/eventAction";
import UnauthorizedAccess from "./UnauthorizedAccess";

const AddEvent = () => {
  const { isLogin } = useSelector((state) => state.adminLogin);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  // onsubmit function after adding to form
  const [image, setImage] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const { success, error: postError } = useSelector((state) => state.newEvent);
  const gallerySubmit = (e) => {
    e.preventDefault();

    const myFormData = new FormData();
    myFormData.set("eventTitle", eventTitle);
    myFormData.set("eventDesc", eventDesc);

    image.forEach((images) => {
      myFormData.append("images", images);
    });

    dispatch(postEvent(myFormData));
  };

  // onchange function for images and input field
  const registerOnChange = (e) => {
    // const files = Array.from(e.target.files);
    // setAvatarPreview([]);

    // files.forEach((file) => {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setAvatarPreview((old) => [...old, reader.result]);
    //     }
    //   };
    //   reader.readAsDataURL(file);
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

  // delete event function
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteevent
  );
  const deleteEventHandler = (id) => {
    dispatch(deleteEventAction(id));
  };

  // List of all images
  const { events, error } = useSelector((state) => state.allEvent);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (postError) {
      alert.error(postError);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Event Added Sucessfully");
      dispatch({ type: NEW_EVENT_RESET });
      navigate("/admin/dashboard");
    }
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Event Deleted Successfully");
      dispatch({ type: EVENT_DELETE_RESET });
    }
    dispatch(getAllEvent());
  }, [
    error,
    dispatch,
    alert,
    deleteError,
    isDeleted,
    navigate,
    success,
    postError,
  ]);
  const rows = [];
  const columns = [
    {
      field: "id",
      headerName: "Event Id",
      minWidth: 180,
      flex: 0.2,
    },
    {
      field: "eventTitle",
      headerName: "Event Title",
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
            <Button
              onClick={() =>
                deleteEventHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  events.events &&
    events.events.forEach((item, index) => {
      rows.push({
        id: item.id,
        eventTitle: item.eventTitle,
      });
    });

  return (
    <Fragment>
      <section className="adminEventContainer"></section>
      {localStorage.getItem("token") ? (
        <Fragment>
          <section className="adminGalleryContainer1">
            <div className="adminSidebar">
              <AdminSidebar />
            </div>

            <div className="formContainer">
              <h1 className="galleryFormHeading">Add Events</h1>
              <form
                className="galleryForm"
                onSubmit={gallerySubmit}
                encType="multipart/form-data"
              >
                <div className="form__group">
                  <label htmlFor="title" className="inputTitle">
                    Event Title:
                  </label>
                  <div className="formgroup__text">
                    <EventIcon className="insertPhotoIcon__input" />
                    <input
                      type="text"
                      placeholder="Event Title"
                      value={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form__group">
                  <label htmlFor="title" className="inputTitle">
                    Event Description:
                  </label>
                  <div className="formgroup__text">
                    <textarea
                      cols={50}
                      rows={10}
                      type="text"
                      placeholder="Event Description"
                      value={eventDesc}
                      onChange={(e) => setEventDesc(e.target.value)}
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
              {imagePreview &&
                imagePreview.map((item, index) => (
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
        <UnauthorizedAccess Message="403 Forbidden" />
      )}
    </Fragment>
  );
};

export default AddEvent;
