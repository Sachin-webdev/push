import { Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import "./OurTeams.css";

const OurTeams = ({ Name, Designation, ProfileImg, TeamsDescription }) => {
  const teamDesc = [TeamsDescription];
  const [showMore, setshowMore] = useState(false);
  return (
    <Fragment>
      <div className="card teams__card">
        <div className="teams__image">
          <img src={ProfileImg} alt="" className="team__Profile" />
        </div>
        <div className="teams__name">
          <Typography variant="h6" className="team__name">
            {Name}
          </Typography>
        </div>
        <div className="teams__desgination">
          <Typography variant="body2" className="team__designation">
            {Designation}
          </Typography>
        </div>

        <div className="teams__socialIcons">
          <Typography variant="body2" className="team__description">
            {showMore
              ? TeamsDescription
              : `${TeamsDescription.substring(0, 50)}....`}

            <span
              variant="subtitle2"
              className="showMore"
              onClick={() => setshowMore(!showMore)}
            >
              {showMore === true ? <p>Show Less</p> : <p> Show More</p>}
            </span>
          </Typography>
        </div>
      </div>
    </Fragment>
  );
};

export default OurTeams;
