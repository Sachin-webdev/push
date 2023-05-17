import React, { Fragment, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, getAllEvent } from "../../actions/eventAction";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { events, error } = useSelector((state) => state.allEvent);
  const alert = useAlert();
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAllEvent());
  }, [error, dispatch, alert]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
    },
  };

  const baseUrl = "http://localhost:9000/files/gallery/";

  return (
    <Fragment>
      <div className="container">
        <section className="homeContainer">
          <div className="homeContainer__headingContainer">
            <Typography className="homeContainer__heading1" variant="h2">
              Nepals Hospitality
            </Typography>
            <Typography className="homeContainer__heading2" variant="subtitle1">
              Connecting Globally...
            </Typography>
          </div>
        </section>

        <section className="about">
          <div className="about__description">
            <div className="about__descriptionHeader">
              <Typography variant="h2" className="about__heading">
                WELCOME TO NEPALS HOSPITALITY
              </Typography>
            </div>
            <Typography className="home__description line-height">
              A leading hospitality and tourism organization in Nepal. Our
              mission is to promote Nepal as a premier destination for
              hospitality and tourism, while also providing training and
              resources to enhance the skills of our human resources. we believe
              that our people are the foundation of our success. That's why we
              offer training and development programs to enhance their skills
              and help them achieve their career aspirations. Our programs are
              designed to provide our employees with the knowledge and skills
              needed to excel in their roles, whether it be in management, food
              and beverage service, or housekeeping.....
              <Link to="/about" className="about__link">
                <Button variant="contained">Learn More</Button>
              </Link>
            </Typography>
          </div>
        </section>

        <section className="container events">
          <div className=" container upcomingEventsHeading">
            <Typography variant="h2" className="upcomingEventsHeading__name">
              Upcoming Events
            </Typography>
          </div>
          <Carousel
            autoPlay
            infinite
            autoPlaySpeed={3000}
            responsive={responsive}
            className="upcomingEvents"
          >
            {events.events ? (
              events.events.map((item, index) => (
                <a
                  className="eventCarousel"
                  key={index}
                  href={`/event/${item.id}`}
                >
                  <div className="hover"></div>
                  <div className="card eventsCarousel">
                    <img
                      src={baseUrl + item.filename[0]}
                      alt={item.eventTitle}
                    />
                    <Typography variant="h4" className="eventTitle">
                      {item.eventTitle}
                    </Typography>
                  </div>
                </a>
              ))
            ) : (
              <div></div>
            )}
          </Carousel>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
