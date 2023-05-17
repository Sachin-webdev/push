import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import "./ContactDescription.css"
const ContactDescription = ({ Description }) => {
  return (
    <Fragment>
      <div className="contactDescription__left">
        {Description &&
          Description.map((item) => (
            <div className="descriptionLeft">
              <div className="descriptionheading__container">
                <Typography className="descriptionLeft__icons">
                  {item.Icon}
                </Typography>
                <Typography
                  className="descriptionheading__title"
                  variant="h2"
                >
                  {item.Title}
                </Typography>
              </div>
              <Typography className="contactDescription__Left1">
                {item.Description1}
              </Typography>
              <Typography className="contactDescription__Left2">
                {item.Description2}
              </Typography>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default ContactDescription;
