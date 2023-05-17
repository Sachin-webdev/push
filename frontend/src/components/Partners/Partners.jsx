
import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Partners.css";

import affiliations from "../Footer/affiliations";
import { Link } from "react-router-dom";
const Partners = () => {
  return (
    <>
      <section className="partnersTop">
        <div className="partners__headingContainer">
          <Typography className="partner__heading" variant="h2">
            Our Partners
          </Typography>
        </div>
      </section>

      <section className="container partnersContainer">
        {affiliations &&
          affiliations.map((item, index) => (
            <Link
              to={item.link}
              target="_blank"
              key={index}
              className="partnersImageContainer"
            >
              <Typography variant="subtitle1" className="partnersName">
                {item.partnersName}
              </Typography>
              <img src={item.src} alt="" />
            </Link>
          ))}
      </section>


      <div className="container partnerFormContainer">
        <form className="contactForm" >
          <label className="form__groupLabel" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            className="contactForm__group"
            placeholder="Your Name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
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
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />

          <label className="form__groupLabel" htmlFor="phone">
            Contact
          </label>
          <input
            type="text"
            className="contactForm__group"
            placeholder="+977 9876543210"
            // value={phone}
            name="phone"
            // onChange={(e) => setPhone(e.target.value)}
          />

          <label className="form__groupLabel" htmlFor="message">
            Comments
          </label>
          <textarea
            placeholder="If u have any special requirement"
            cols={30}
            rows={10}
            className="form__group form__textarea"
            // value={message}
            name="message"
            // onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <Button
            variant="contained"
            className="contactBtn"
            type="submit"
          >
            Become a Partner
          </Button>
        </form>
      </div>

    </>
  );
};

export default Partners;
