import React, { useEffect, useState } from "react";
import "./AwardForm.css";
import { Typography } from "@mui/material";
import { Country, State } from "country-state-city";

const AwardForm = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const [country, setCountry] = useState(Country);
  const [state, setState] = useState(State);
  const representor = [
    "Government",
    "Non-Government",
    "Organization",
    "Companies/Instituiton",
    "Universities",
    "Individual",
    "Others",
  ];
  return (
    <>
      <section className="awardBackground">
        <div className="awardHeading">
          <Typography className="award__heading" variant="h2">
            APPLY FOR AWARD
          </Typography>
        </div>
      </section>

      <section className="awardMissionSection">
        <div className="missionContainer">
          <Typography variant="h6" className="awardMission">
            Mission of the award
          </Typography>

          <ul>
            <li>
              <Typography variant="subtitle1" className="awardMissionDesc">
                To develop professional and competitive hospitality industry
                through promoting achievements in the hotel business.
              </Typography>
            </li>
          </ul>
        </div>
        <div className="awardConceptContainer">
          <Typography variant="h6" className="awardConcept">
            Concept of the award
          </Typography>

          <ul>
            <li>
              <Typography variant="subtitle1" className="awardconceptDesc">
                To praise and honor the best hotels and personalities in the
                hospitality and tourism industry according to the performance
                results of each year.
              </Typography>
            </li>
          </ul>
        </div>
      </section>

      <section className="container awardFormContainer">
        <form className="container awardForm">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Your Name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Phone no.
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Phone no."
              aria-describedby="emailHelp"
            />
          </div>
          <div className="genderBirthDate">
            <div class="form-check genderButton">
              <label for="exampleInputEmail1" className="form-label ">
                Gender
              </label>
              <div className="genderRadioContainer">
                <input
                  class="form-check-input inputRadio"
                  type="radio"
                  name="radioGender"
                  id="radioMale"
                />
                <label class="form-check-label radioSelect" for="radioMale">
                  Male
                </label>
                <input
                  class="form-check-input inputRadio"
                  type="radio"
                  name="radioGender"
                  id="radioFemale"
                />
                <label class="form-check-label radioSelect" for="radioFemale">
                  Female
                </label>

                <input
                  class="form-check-input inputRadio"
                  type="radio"
                  name="radioGender"
                  id="radioOthers"
                />
                <label class="form-check-label radioSelect" for="radioOthers">
                  Others
                </label>
              </div>
            </div>

            <div className="birthDateContainer">
              <label class="form-check-label dob" for="dob">
                Date of Birth
              </label>
              <input type="date" />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Adress
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Address"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Country
            </label>
            <select
              class="form-select"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              aria-label="Default select example"
            >
              <option selected>Select Country</option>
              {Country &&
                Country.getAllCountries().map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              State
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select State</option>
              {State &&
                State.getStatesOfCountry(country).map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Representor
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>You are respresenting</option>
              {representor &&
                representor.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>

    
    </>
  );
};

export default AwardForm;
