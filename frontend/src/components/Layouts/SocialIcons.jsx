import { IconButton } from "@mui/material";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./SocialIcons.css";
const SocialIcons = ({ Icon, NavLink, Color }) => {
  return (
    <Fragment>
      <Link to={NavLink}>
        <IconButton className="social__iconsContainer">
          <Icon className="social__icons" style={{ color: Color }} />
        </IconButton>
      </Link>
    </Fragment>
  );
};

export default SocialIcons;
