import { Typography } from "@mui/material";
import React, { Fragment } from "react";
const AdminDetails = ({ DetailTitle, DetailDescription }) => {
  return (
    <Fragment>
      <div className="admin__Details">
        <Typography className="admin__detailsItem1" variant="h4">
          {DetailTitle}
        </Typography>
        <Typography className="admin__detailsItem2" variant="subtitle1">
          {DetailDescription}
        </Typography>
      </div>
    </Fragment>
  );
};

export default AdminDetails;
