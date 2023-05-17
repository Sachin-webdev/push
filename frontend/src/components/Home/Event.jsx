import { Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import "./Event.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, getSingleEvent } from "../../actions/eventAction";

const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const baseUrl = "http://localhost:9000/files/gallery/";

  const alert = useAlert();
  const { event, error } = useSelector((state) => state.event);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getSingleEvent(id));
  }, [error, dispatch, alert, id]);

  return (
    <Fragment>
      <div className="container eventDiv">
        <section className="eventContainer">
          <div className="container eventHeadImage">
            {/* <img src={baseUrl + event.filename[0]} alt="" /> */}
          </div>
          <div className="event__headingContainer">
            <Typography className="event__heading" variant="h2">
              {event.eventTitle}
            </Typography>
          </div>
        </section>

        <section
          className="eventSection1 container my-5"
        >
          <div className="container eventDescription">
            <Typography variant="subtitle1" className="eventDesc">
              {event.eventDesc}
            </Typography>

            <div className="eventimagecontainer">
              {event.filename ? (
                event.filename.map((item, index) => (
                  <div className="container eventImages">
                    <img src={baseUrl + item} alt="" />
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Event;
