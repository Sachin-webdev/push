import { Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <Fragment>
      <section className="registerContainer">
        <div className="register__heading">
          <Typography className="reg__heading" variant="h2">
            Summit & Awards
          </Typography>
        </div>
      </section>

      <section className="container awardContainer">
        <div className="aboutAwardContainer">
          <div className="awardDescriptionTopConatiner">
            <div className="my-5 awardTopDesc1">
              <Typography
                variant="h5"
                className="awardDateHeading awardHeadings"
              >
                IN 2023, THE 1ST INTERNATIONAL HOSPITALITY CONFERENCE WILL BE
                HELD AT KATHMANDU, NEPAL !
              </Typography>
              <Typography className="my-4 topDescription line-height">
                Each of us is convinced by our own experience that it is
                important not only to follow today's trends, but also to quickly
                react to any external changes in the world.Our mission remains
                the same - ensuring sustainable development of the country
                through hospitality!
              </Typography>
            </div>

            <div className="my-5 awardTopDesc2">
              <Typography
                variant="h5"
                className="awardSubHeading awardHeadings"
              >
                INTERNATIONAL HOSPITALITY CONFERENCE:
              </Typography>

              <Typography
                variant="subtitle1"
                className="my-4 topDescription line-height"
              >
                <b>RELOAD</b> is the theme of 2023, within the framework of
                which international speakers will share real cases of the new
                vector of development of the hospitality industry. The
                management dialogue format of the leading hotels of Ukraine and
                European countries has already proven its effectiveness. This
                year, within the framework of the 4th international conference,
                we have collected successful solutions, trends and positive
                experiences of the world's leading hotels, which we are ready to
                share with you! We will outline the key vectors of development -
                you will be able to choose the one necessary for the development
                of your business at the International Hospitality Conference on
                June 18, 2023!
              </Typography>
            </div>

            {/* <h4 className=" awardHeadings">PARTNERSHIP will be add on dashboard</h4> */}
          </div>
        </div>

        <div className="my-5 awardDiv container">
          <Link to="/delegate" className="awardLink">
            Apply for Delegate
          </Link>
          <Link to="/award" className="awardLink">
            Apply for Award
          </Link>
        </div>

        <div className="deadlineContainer">
          <Typography variant="subtitle1" className="my-4 deadlineDate">
            Deadline: 20 th June, 2023
          </Typography>

          <Typography
            variant="subtitle1"
            className="my-3 line-height deadlineDate"
          >
            Introduction:
            <br />
            Applications are now open for “Global Youth Leadership Summit &
            Award 2023” which will be held on 17 to 20 March, 2022 in Dubai,
            UAE, on the occasion of that summit Global Youth Parliament will go
            to reward from “Global Youth Leadership Award 2023”, “The Emerging
            Leader Award 2022” and “Global Youth Entrepreneurship Award 2023”,
            to those who contributes, acknowledges and celebrates outstanding
            contribution in the sector of youth leadership, peace, non-violence,
            innovation, social justice, empowerment, human rights,
            entrepreneurship, tourism, SDGs and Democracy.
          </Typography>

          <Typography
            variant="subtitle1"
            className="my-3 line-height deadlineDate"
          >
            For the last few years, Global Youth Parliament has been honoring
            dynamic personalities from diverse fields with awards. With clear
            instruction and selection procedures, the Award has been given to
            the individuals that have contributed immensely in their respective
            countries and societies politically, socially or economically. With
            a strict set of rules and guidelines, GYP declares the awardees
            after receiving recommendations from the selection committee. It is
            the world's premier award and the award is presented to them in
            inaugural ceremony of “Global Youth Leadership Summit & Award 2023”
            on 18th March.
          </Typography>

          <Typography
            variant="subtitle1"
            className="my-3 line-height deadlineDate"
          >
            “Global Youth Leadership Summit & Award 2023” aims to gather young
            leaders, innovators, peacemakers, youth activists, and civil society
            pioneers from around the World in a single forum to share their
            contributions, experiences, and knowledge on pertinent global
            issues.
          </Typography>

          <Typography variant="subtitle1" className="line-height deadlineDate">
            “Global Youth Leadership Summit & Award 2023” is more than a summit.
            It's the platform for young leaders from around the world to share
            and learn about the best practices through mutual learning on ideas
            and initiatives of advocacy tools to achieve sustainable development
            goals from the youth perspective and encourage youth to lobby them
            in their own respective governments.
          </Typography>

          <Typography variant="h4" className="line-height awardTypes">
            Fully Funded: 3
          </Typography>
          <Typography variant="h4" className="line-height awardTypes">
            Partially Funded: 7 (Registration fee free)
          </Typography>
          <Typography variant="h4" className="line-height awardTypes">
            Self: 200
          </Typography>
        </div>

        <div className="thematicSessionsContainer">
          <Typography variant="h4" className="thematicSessions my-4">
            Thematic Sessions:
          </Typography>
          <ol type="1" className="deadlineDate">
            <li>
              <Typography
                variant="subtitle1"
                className="deadlineDate line-height"
              >
                <b>Sustainable Entrepreneurship</b>
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                className="deadlineDate line-height"
              >
                <b>Youth, Innovation & Metaverse</b>
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                className="deadlineDate line-height"
              >
                <b>Meaningful youth leadership to prevent violent extremism</b>
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                className="deadlineDate line-height"
              >
                <b>Youth in climate action: Journey towards COP28</b>
              </Typography>
            </li>
          </ol>
        </div>

        <div className="awardObjectivesContainer">
          <Typography variant="h4" className="awardObjectives my-4">
            Ojectives:
          </Typography>
          <Typography
            variant="subtitle1"
            className="my-2 deadlineDate line-height"
          >
            The objective of this summit and award are:
          </Typography>

          <ol type="I" className="deadlineDate">
            <li>
              <Typography
                variant="subtitle1"
                className="line-height deadlineDate"
              >
                To inspire individuals from around the world and recognize their
                contribution that has added value to the creative endeavors in
                serving humanity.
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                className="line-height deadlineDate"
              >
                To create a common platform to empower the youth network within
                the World.
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                className="line-height deadlineDate"
              >
                To motivate young people to be good leaders in their respective
                countries.
              </Typography>
            </li>
          </ol>

          <div className="selectionCriteriaContainer">
            <Typography variant="h4" className="selectionHeading line-height">
              Selection Criteria:
            </Typography>
            <Typography
              variant="subtitle1"
              className="deadlineDate line-height"
            >
              An autonomous selection committee formed by Global Youth
              Parliament decides the awardees based upon the application and by
              also conducting its own external research and recommendations. The
              award committee decision is taken as the final decision for the
              selection.
            </Typography>

            <Typography variant="h4" className="line-height eligibility">
              Eligibility:
            </Typography>

            <ol type="1">
              <li>
                <Typography
                  variant="subtitle1"
                  className="line-height deadlineDate"
                >
                  The nominee must be a confirmed delegate of “Global Youth
                  Leadership Summit & Award 2023”.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="subtitle1"
                  className="line-height deadlineDate"
                >
                  Global Youth Parliament wants to highly encourage those who
                  have ideas for new projects and initiatives in addition to
                  those who are already leading them.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="subtitle1"
                  className="line-height deadlineDate"
                >
                  The most important criteria are interesting in the
                  facilitation of debate and development of resolutions on the
                  best way forward to achieve SDGs and a commitment to act.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="subtitle1"
                  className="line-height deadlineDate"
                >
                  The nominee must have a strong commitment and determination to
                  work with Global Youth Parliament in the future.
                </Typography>
              </li>
            </ol>

            <Typography variant="h4" className="line-height eligibility">
              Age Barrier:
            </Typography>
            <Typography
              variant="subtitle1"
              className="line-height deadlineDate"
            >
              There is no age barrier to receive an award. Anyone can be
              eligible to receive the award.
            </Typography>
          </div>
        </div>

        <div className="my-5 awardPricesContainer">
          <Typography variant="h4" className="line-height eligibility">
            Award:
          </Typography>
          <Typography variant="subtitle1" className="line-height deadlineDate">
            This award is a global recognition for the noble work. Hence, the
            award consists of Maiden, Trophy as well as a certificate. This
            award is a token of appreciation for the selfless dedication of
            individuals in making a positive change in their communities. It is
            our way of expressing THANK YOU for the great deeds.
          </Typography>

          <Typography variant="h4" className="line-height eligibility">
            $550 USD includes:
          </Typography>

          <ol type="1">
            <li>
              <Typography
                variant="subtitle1"
                className="line-height deadlineDate"
              >
                The participation fee covers registration.
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                className="line-height deadlineDate"
              >
                Accommodation and food during the conference.
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                className="line-height deadlineDate"
              >
                Pick up and drop from Dubai International Airport in Dubai, UAE.
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                className="line-height deadlineDate"
              >
                Stationary and other educational materials including some
                publications.
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                className="line-height deadlineDate"
              >
                Half Day Dubai City Tour.
              </Typography>
            </li>
          </ol>

          <Typography variant="h4" className="line-height eligibility">
            $400 USD includes:
          </Typography>
          <ol type="1">
            <li>
              <Typography
                variant="subtitle1"
                className="line-height deadlineDate"
              >
                The participation fee covers registration.
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                className="line-height deadlineDate"
              >
                Lunch on 18 March & 19 March.
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                className="line-height deadlineDate"
              >
                Stationary and other educational materials including some
                publications.
              </Typography>
            </li>
          </ol>

          <Typography variant="subtitle1" className="line-height deadlineDate">
            Please note that your application fee will not cover your a flight
            to Dubai and back. Your application fee will not cover your visa
            fee, insurance, or any other incidental expenses.
          </Typography>
          <Typography variant="h4" className="line-height eligibility">
            VISA
          </Typography>
          <Typography variant="subtitle1" className="line-height deadlineDate">
            An international applicant is responsible for obtaining their own
            visa to travel to UAE. Contact the nearest UAE Embassy or Consulate
            to find out how. Acceptance to The{" "}
            <b> “Global Youth Leadership Summit & Award 2023”</b> does NOT
            guarantee the issuance of a visa or admission into UAE.
          </Typography>
          <Typography variant="h4" className="line-height eligibility">
            Fee
          </Typography>
          <Typography variant="h4" className="line-height eligibility">
            Accommodation Fee $ 550 USD
          </Typography>
          <Typography variant="h4" className="line-height eligibility">
            Non-accommodation Fee $ 400 USD
          </Typography>
          <Typography variant="h4" className="line-height eligibility">
            Registration fee is non-refundable and non-transferable.
          </Typography>
        </div>

        <div className="my-5 awardBenefitsContainer">
          <Typography variant="h5" className="benefitHeading awardHeadings">
            BENEFITS
          </Typography>
          <Typography
            variant="subtitle1"
            className="my-4 benefitsDescriptions line-height"
          >
            <b>International Hospitality </b>brings together owners and top
            management of the best hotels, key people of the industry, mass
            media as well as hotel operators, developers, auditors and
            consultants. It enables partners to be widely advertised within the
            Awards Campaign and Gala Ceremony. One of the principal tasks of the
            project is to develop a unique platform for
            cooperation/communication among top figures in the hospitality
            industry and various adjacent segments.
          </Typography>

          <Typography
            variant="subtitle1"
            className="benefitsOpportunities my-5"
          >
            <b>Business opportunities:</b>
            <ul className="my-2">
              <li className="line-height">
                Acquire new contacts with key decision-makers of hospitality
                industry.
              </li>
              <li className="line-height">
                Be represented in all advertisements and publications related to
                the event throughout the PR campaigned before, during and after
                the event.
              </li>
              <li className="line-height">
                Present company or product to vast amount of potential clients
                at the event.
              </li>
              <li className="line-height">
                Present the goods and services within the framework of the
                Awards.
              </li>
              <li className="line-height">
                Opportunity to deliver the award to the winner at the stage.
              </li>
              <li className="line-height">
                Be represented in the promotional materials of the Awards.
              </li>
            </ul>
          </Typography>

          <Typography variant="subtitle1" className="targetedAudience my-5">
            <b>Targeted audience:</b>
            <ul className="my-2">
              <li className="line-height">
                Owners and top management, key people of the industry, media
                people as well as hotel operators, developers, auditors and
                consultants.
              </li>
              <li className="line-height">
                Total number of participants is about 300 people Total
                advertising campaign aims to reach about millions people.
              </li>
              <li className="line-height">
                Exact media plan of the event coverage will be provide on the
                request.
              </li>
            </ul>
          </Typography>

          <Typography variant="subtitle1" className="awardAdvantages my-5">
            <b>Advantages:</b>
            <ul className="my-2">
              <li className="line-height">
                Company/brand promotion among the target audience at the
                international level.
              </li>
              <li className="line-height">
                Wide PR support (printed media, Internet and social media).
              </li>
              <li className="line-height">
                Status confirmation, demonstration of the company's high level
                to potential customers and partners during the event.
              </li>
              <li className="line-height">
                Establishment of new business contacts and cooperation
              </li>
              <li className="line-height">
                Wide range promotion among the target audience of hoteliers both
                before and during the
                <br />
                <b>
                  INTERNATIONAL HOSPITALITY AND AWARD GRAND CEREMCONY
                  CONFERENCE.
                </b>
              </li>
              <li className="line-height">
                Wide range of partnership options allows you to choose ones that
                fits the best for your business.
              </li>
            </ul>
          </Typography>
        </div>
      </section>
    </Fragment>
  );
};

export default Register;
