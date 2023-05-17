import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import CollectionsIcon from "@mui/icons-material/Collections";
import EventIcon from "@mui/icons-material/Event";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { logout } from "../../actions/adminAction";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";

const AdminSidebar = () => {
  const alert = useAlert();

  return (
    <Fragment>
      <div className="container adminSidebar1">
        <Link to="/admin/dashboard" className="sidepanel">
          <Typography className="sidepanel__icons" variant="h4">
            <DashboardIcon className="sidepanel__icons" />
          </Typography>
          <Typography className="sidepanel__title" variant="h4">
            Dashboard
          </Typography>
        </Link>

        <Link to="/admin/messages" className="sidepanel">
          <Typography className="sidepanel__icons" variant="h4">
            <MailOutlineIcon className="sidepanel__icons" />
          </Typography>
          <Typography className="sidepanel__title" variant="h4">
            Messages
          </Typography>
        </Link>

        <Link to="/admin/register" className="sidepanel">
          <Typography className="sidepanel__icons" variant="h4">
            <PersonIcon className="sidepanel__icons" />
          </Typography>
          <Typography className="sidepanel__title" variant="h4">
            Register
          </Typography>
        </Link>

        <Link to="/admin/gallery" className="sidepanel">
          <Typography className="sidepanel__icons" variant="h4">
            <CollectionsIcon className="sidepanel__icons" />
          </Typography>
          <Typography className="sidepanel__title" variant="h4">
            Add to Gallery
          </Typography>
        </Link>
        <Link to="/admin/event" className="sidepanel">
          <Typography className="sidepanel__icons" variant="h4">
            <EventIcon className="sidepanel__icons" />
          </Typography>
          <Typography className="sidepanel__title" variant="h4">
            Add Events
          </Typography>
        </Link>
        <Link
          to={"/admin/login"}
          className="sidepanel"
          onClick={() => {
            localStorage.clear();
            alert.success("Logged Out Successfully.");
          }}
        >
          <Typography className="sidepanel__icons" variant="h4">
            <ExitToAppIcon className="sidepanel__icons" />
          </Typography>
          <Typography className="sidepanel__title" variant="h4">
            Log Out
          </Typography>
        </Link>
      </div>
    </Fragment>
  );
};

export default AdminSidebar;
