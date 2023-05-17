import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import ContactDescription from "../Layouts/ContactDescription";
import "./Contact.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createMessage } from "../../actions/messageAction";
import { CREATE_MESSAGE_RESET } from "../../constant/messageConstant";
import { useAlert } from "react-alert";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const contactDescription = [
    {
      Icon: <MailOutlineIcon />,
      Title: "Chat to us",
      Description1: "Our friendly team is here to help.",
      Description2: "nepalhospitality@gmail.com",
    },
    {
      Icon: <LocationOnIcon />,
      Title: "Office",
      Description1: "Address Line1",
      Description2: "Address line 2",
    },
    {
      Icon: <PhoneIcon />,
      Title: "Phone",
      Description1: "+977 9876543210",
      Description2: "+977 01-4343223",
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const { success, error } = useSelector((state) => state.newMessage);
  // message submit
  const sendMessageHandler = (e) => {
    e.preventDefault();

    const messageData = new FormData();
    messageData.set("name", name);
    messageData.set("email", email);
    messageData.set("phone", phone);
    messageData.set("message", message);
    dispatch(createMessage(messageData));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    if (success) {
      alert.success("Message sent successfully");
      navigate("/");
      dispatch({ type: CREATE_MESSAGE_RESET });
    }
  }, [alert, dispatch, error, navigate, success]);

  return (
    <Fragment>
      <div className="container">
        <section className="contactContainer__top">
          <div className="contact__headingContainer">
            <Typography className="contact__heading" variant="h2">
              Contact Us
            </Typography>
          </div>
        </section>

        <section className="contactConatiner__mid">
          <div className="midContactContainer__left">
            <div className="midContactContainer__headingContainer">
              <Typography className="midContactContainer__heading" variant="h2">
                Get in touch
              </Typography>
              <Typography className="midContactContainer__headingDesc">
                We love to hear from you. Our friendly team is always here to
                chat.
              </Typography>

              <div className="leftDescriptionContainer">
                <ContactDescription Description={contactDescription} />
              </div>
            </div>
          </div>

          <div className="midcontainer__right">
            <div className="rightContainer__heading">
              <Typography variant="h2" className="rightContainer__title">
                Contact Us
              </Typography>
              <Typography variant="subtitle2" className="rightContainer__desc">
                You can reach us anytime via
                <Link className="contact__link">
                  info.nepalshospitality@gmail.com
                </Link>
              </Typography>
            </div>

            <div className="formContainer">
              <form className="contactForm" onSubmit={sendMessageHandler}>
                <label className="form__groupLabel" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  className="contactForm__group"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                />

                <label className="form__groupLabel" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  className="contactForm__group"
                  placeholder="you@example.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label className="form__groupLabel" htmlFor="phone">
                  Contact
                </label>
                <input
                  type="text"
                  className="contactForm__group"
                  placeholder="+977 9876543210"
                  value={phone}
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />

                <label className="form__groupLabel" htmlFor="message">
                  How can we help?
                </label>
                <textarea
                  placeholder="Tell us your concern"
                  cols={30}
                  rows={10}
                  className="form__group form__textarea"
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <Button
                  variant="contained"
                  className="contactBtn"
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
      
    </Fragment>
  );
};

export default Contact;
