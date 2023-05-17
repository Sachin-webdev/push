import { Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import "./About.css";
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import OurTeams from "../Layouts/OurTeams";
import ashok from "../../Images/Ashok.jpg";
import nopic from "../../Images/Profile.png";
import basu from "../../Images/basu.jpg";
import binod from "../../Images/Binod.jpg";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="container aboutUs">
        <section className="aboutContainer">
          <div className="aboutUs__heading">
            <Typography className="abt__heading" variant="h2">
              About Us
            </Typography>
          </div>
        </section>

        <section className="about__descriptionContainer about__descriptionContainer1">
          <div className="about__desc about__desc1">
            <div className="about__descriptionHeading1">
              <Typography variant="h5" className="about__heading1">
                Our Mission and Vision
              </Typography>
            </div>
            <div className="about__details">
              <Typography variant="subtitle1" className="desc line-height">
                Welcome to NEPAL HOSPITALITY , a leading hospitality and tourism
                organization in Nepal. Our mission is to promote Nepal as a
                premier destination for hospitality and tourism, while also
                providing training and resources to enhance the skills of our
                human resources. Our vision is to establish Nepal as a global
                hub for hospitality and tourism, recognized for its exceptional
                services and high-quality training programs.
              </Typography>
            </div>
          </div>
          <div className="about__imgContainer">
            <img className="about__img  about__img1 " src={img1} alt="" />
          </div>
        </section>

        <section className="about__descriptionContainer about__descriptionContainer2">
          <div className="about__imgContainer">
            <img className="about__img  about__img2 " src={img2} alt="" />
          </div>

          <div className="about__desc about__desc2">
            <div className=" about__descriptionHeading2">
              <Typography variant="h5" className="about__heading2">
                Our Objectives
              </Typography>
            </div>

            <div className="about__details">
              <Typography variant="subtitle1" className="desc">
                We aim to achieve this by focusing on the following objectives:
                <div className="objectives">
                  <ol type="number">
                    <li className="my-4 objective__lists line-height">
                      <b>Training and Development:</b> At NEPAL HOSPITALITY, we
                      understand the importance of investing in our human
                      resources. We offer a range of professional and vocational
                      programs to enhance their skills and knowledge, including
                      courses in hospitality management, culinary arts, and
                      customer service. Our goal is to equip our team members
                      with the tools they need to provide exceptional service to
                      our guests.
                    </li>
                    <li className="my-4 objective__lists line-height">
                      <b>International Recognition:</b> We believe that recognition
                      from the international community is key to establishing
                      Nepal as a premier hospitality and tourism destination. To
                      achieve this, we participate in various international
                      conferences and meetings to promote our country's unique
                      culture and hospitality. We also invite internationally
                      recognized hospitality icons to share their knowledge and
                      expertise with our team members, further enhancing their
                      skills.
                    </li>
                    <li className="my-4 objective__lists line-height">
                    <b>Appreciation Events:</b> At NEPAL HOSPITALITY , we value our
                      team members and believe in recognizing their
                      contributions to our success. We organize various
                      appreciation events, including awards ceremonies and
                      team-building activities, to foster a sense of community
                      and motivate our staff to excel.
                    </li>
                  </ol>
                </div>
              </Typography>
            </div>
          </div>
        </section>

        <section className="about__descriptionContainer about__descriptionContainer2">
          <div className="about__desc about__desc1">
            <div className="about__descriptionHeading1">
              <Typography variant="h5" className="about__heading1">
                What Do We Do?
              </Typography>
            </div>
            <div className="about__details">
              <Typography variant="subtitle1" className="desc line-height">
                At NEPAL HOSPITALITY , we believe that our people are the
                foundation of our success. That's why we offer training and
                development programs to enhance their skills and help them
                achieve their career aspirations. Our programs are designed to
                provide our employees with the knowledge and skills needed to
                excel in their roles, whether it be in management, food and
                beverage service, or housekeeping. In addition to our focus on
                training and promoting Nepal as a hospitality and tourism hub,
                we also strive to create opportunities for our employees to gain
                international recognition and appreciation. We do this by
                organizing hospitality conferences, meetings, and events that
                bring together pioneers and internationally recognized
                hospitality icons. Our employees have the opportunity to learn
                from these experts and gain exposure to the latest trends and
                practices in the industry. At NEPAL HOSPITALITY , we are
                committed to providing our guests with the highest level of
                service, while also supporting our employees and promoting Nepal
                as a top hospitality and tourism destination. Join us on our
                journey to excellence in hospitality
              </Typography>
            </div>
          </div>
        </section>

        <section className="about__teamsContainer">
          <div>
            <Typography className="about__teamsheading" variant="h2">
              OUR TEAMS
            </Typography>
          </div>
          <div className="about__ourTeams">
            <OurTeams
              Name="A. Bhandari"
              Designation="Founder Chairman"
              ProfileImg={nopic}
              TeamsDescription=""
            />
            <OurTeams
              Name="N. Adhikari"
              Designation="Managing Director"
              ProfileImg={nopic}
              TeamsDescription=""
            />
            <OurTeams
              Name="Basu Gautam"
              Designation="Advisor"
              ProfileImg={basu}
              TeamsDescription="Basu Gautam is an author, educator, speaker, and traveler who is also the President and Founder of Lumbini World Peace Forum. Gautam has over 20 years of professional experience spanning various
              countries and is dedicated to promoting peace, social justice, and sustainability through creativity,
              cross-cultural dialogue, and innovation."
            />
            <OurTeams
              Name="Binod Ojha"
              Designation="Director - Sales & Marketing"
              ProfileImg={binod}
              TeamsDescription="Binod is a dynamic media marketing leader who has been successful in spearheading all aspects of inside and
              outside sales as well as corporate marketing, branding and advertising influencers, customer relations and
              sales lead generation for private enterprise.
              Expert in creating effective sales strategy policies for direct reports responsible for both external sales and internal sales with lead generation primarily through prospecting, print, online and conference advertising and sponsorship."
            />
            <OurTeams
              Name="Ashok Bhandari"
              Designation="Manager - Digital Marketing "
              ProfileImg={ashok}
              TeamsDescription="Ashok Bhandari Creating, implementing and optimizing social media strategies for companies and collectives with millions of followers Having 5+ experience in eco-focused finance with a relentless focus on generating new revenue through the use of digital and social media are expertise and commitment to brands."
            />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default About;
