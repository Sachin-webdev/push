import React, { useEffect, useState } from "react";
import "./Delegateform.css";
import { Typography } from "@mui/material";
import { Country, State } from "country-state-city";

const Delegateform = () => {
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="delegateBackground">
        <div className="delegateHeading">
          <Typography className="del__heading" variant="h2">
            APPLY FOR DELEGATE
          </Typography>
        </div>
      </section>
      <section className="container delegateFormContainer">
        <form className="container delegateForm">
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

          <div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                1. What knowledge do you expect to acquire from the .... 2023?
                And how will that knowledge benefit you in particular
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Your answer"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                2. What is your motivation for applying for the .... 2023?
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Your answer"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                3. What do you understand by the term impact investment?
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Your answer"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                4. How do you plan to use the knowledge and skills gained during
                the .... 2023?
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Your answer"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="form-check genderButton">
              <label for="exampleInputEmail1" className="form-label ">
                5. Would you like to add additional experiences/contributions?
              </label>
              <div className="genderRadioContainer">
                <input
                  class="form-check-input inputRadio"
                  type="radio"
                  name="flexRadioContribution"
                  id="radioYes"
                />
                <label class="form-check-label radioSelect" for="radioYes">
                  Yes
                </label>
                <input
                  class="form-check-input inputRadio"
                  type="radio"
                  name="flexRadioContribution"
                  id="radioNo"
                />
                <label class="form-check-label radioSelect" for="radioNo">
                  No
                </label>
              </div>
            </div>
            <div className="mb-3 my-2 d-flex flex-column">
              <label for="exampleInputEmail1" className="form-label">
                If yes please explain
              </label>
              <textarea rows={5} cols={50} placeholder="Your answer"></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Delegateform;
