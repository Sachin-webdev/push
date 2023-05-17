import { Button, Typography } from "@mui/material";
import React, { Fragment } from "react";
import "./UnauthorizedAccess.css";
import { Link } from "react-router-dom";
const UnauthorizedAccess = () => {
  return (
    <Fragment>
      <div className="unauthorized__header">
        <div className="contents">
          <Typography variant="h2" className="unauthorized__headDesc">
            We are Sorry...
          </Typography>
          <div className="container error__description">
            <Typography variant="subtitle1">
              The page you're trying to access has restricted access.
            </Typography>
            <Typography variant="subtitle1">
              Please refer to your system administrator
            </Typography>
          </div>

          <Link to={"/"}>
            <Button variant="contained">Go Back</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default UnauthorizedAccess;
