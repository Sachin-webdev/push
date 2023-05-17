import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../Images/logo.jpg";
import { Typography } from "@mui/material";
import SocialIcons from "../Layouts/SocialIcons";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Header = () => {
  // const [isSelected, setIsSelected] = useState(false);

  // const toggleOpen = () => {
  //   setIsSelected(!isSelected);
  // };
  return (
    <Fragment>
      <div className="header__navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="nav__headerDescription">
            <div className="nav__socialIcons">
              <SocialIcons
                Icon={FacebookIcon}
                NavLink="https://www.facebook.com"
                Color="white"
              />
              <SocialIcons
                Icon={InstagramIcon}
                NavLink="https://www.instagram.com"
                Color="white"
              />
              <SocialIcons
                Icon={TwitterIcon}
                NavLink="https://www.twitter.com"
                Color="white"
              />
            </div>

            <div className="nav__marquee">
              <Typography className="marquee__text" variant="subtitle1">
                Welcome to Nepal Hospitality - Connecting Globally
              </Typography>
            </div>

            <div className="nav__contact">
              <Typography className="nav__mailUs" variant="h6">
                Mail us:
                <Link variant="subtitle1" className="nav__mailUs1">
                  info.nepalshospitality@gmail.com
                </Link>
              </Typography>
            </div>
          </div>

          <div id="navComponents" className=" container-fluid ">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="navbar__logo" alt="" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse nav-navCollapse navbar-collapse"
              id="navbarNav"
            >
              <div className="nav-item navItemContainer">
                <NavLink className={"nav-items"} to="/">
                  Home
                </NavLink>
              </div>

              <div className="nav-item navItemContainer">
                <NavLink className="nav-items" to="/about">
                  About Us
                </NavLink>
              </div>

              <div className="nav-item navItemContainer">
                <NavLink className="nav-items" to="/gallery">
                  Gallery
                </NavLink>
              </div>

              <div className="nav-item navItemContainer">
                <NavLink className="nav-items" to="/register">
                  Summit & Awards
                </NavLink>
              </div>

              <div className="nav-item navItemContainer">
                <NavLink className="nav-items" to="/partners">
                  Partners
                </NavLink>
              </div>

              <div className="nav-item navItemContainer">
                <NavLink className="nav-items" to="/contact">
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
