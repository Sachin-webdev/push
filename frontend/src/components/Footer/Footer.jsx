import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SocialIcons from "../Layouts/SocialIcons";
import affiliations from "./affiliations";

const Footer = () => {
  return (
    <Fragment>
      <div className="footerContainer">
        <div className="container footer__top">
          <div className="footer__left">
            <div className="footer__header leftFooter__header">
              <Typography className="footerHeading__items" variant="h2">
                About Us
              </Typography>
            </div>
            <div className="leftFooter__description">
              <Typography className="footer__description" variant="subtitle1">
                A leading hospitality and tourism organization in Nepal. Our
                mission is to promote Nepal as a premier destination for
                hospitality and tourism, while also providing training and
                resources to enhance the skills of our human....{" "}
                <Link className="linkto__about" to="/about">
                  Read More
                </Link>
              </Typography>
            </div>
          </div>

          <div className="footer__mid">
            <div className="footer__header midFooter__header">
              <Typography className="footerHeading__items" variant="h2">
                Quick Links
              </Typography>
            </div>

            <div className="midFooter__linkGroup">
              <ul>
                <li>
                  <Link className="midFooter__link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="midFooter__link" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="midFooter__link" to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link className="midFooter__link" to="/gallery">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link className="midFooter__link" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="midFooter__link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="summitAwards">
                  <Link className="midFooter__link" to="/register">
                    Summit & Awards
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__affiliations">
            <div className="footer__header affiliations__header">
              <Typography className="footerHeading__items" variant="h2">
                Our Partners
              </Typography>
            </div>

            <div className="affiliationsContainer">
              {affiliations &&
                affiliations.map((item, index) => (
                  <Link
                    to={item.link}
                    target="_blank"
                    key={index}
                    className="affiliactionsImageContainer"
                  >
                    <img src={item.src} alt="" />
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="rightFooter__contact">
            <Typography variant="subtitle1" className="contact__address">
              Contact Us:
            </Typography>
            <Link className="rightFooter__link" variant="subtitle1">
              info.nepalshospitality@gmail.com
            </Link>
          </div>
          <Typography variant="subtitle2" className="footer_copyright">
            Copyright &copy; 2023 Nepals Hopsitality | All Rights Reserved
          </Typography>
          <div className="rightFooter__contactIcons">
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
            <SocialIcons Icon={TwitterIcon} Color="white" NavLink="https://www.twitter.com" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
