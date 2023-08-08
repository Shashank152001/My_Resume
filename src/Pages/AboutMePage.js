import React from "react";
import "./Stylesheets/AboutMePage.css";
import ProfileImage from "../Resources/ProfileImage.png";
import SectionHeading from "./Components/SectionHeading";

const AboutMePage = () => {
  return (
    <div className="about-me" id="profile">
      <SectionHeading
        heading="Profile"
        quote="I'm a creative full stack web developer"
      />
      <div className="about-me-tab-div">
        <div>
          <h2>About Me</h2>
          <p className="about-me-paragraph">
            I'm a full stack web and mobile developer who lives in the vibrant
            city of Jaipur. I'm passionate about continuous learning and staying
            updated with the latest technology trends. With a strong academic
            background in Information Technology, I have expertise in web
            and mobile development using HTML, CSS, JavaScript, React, Angular
            , Node.js, and more. I thrive on creating exceptional user
            experiences and delivering scalable solutions. Let's connect and
            bring your ideas to life with innovative and cutting-edge
            technology.
          </p>
        </div>
        <div className="about-me-image-div">
          <img src={ProfileImage} alt="Shashank Varsheny" />
        </div>
        <div>
          <h2>Details</h2>
          <div className="about-me-details">
            <div>
              <b>Name:</b>
              Shashank Varshney
            </div>
            <div>
              <b>Age:</b>
              22{" "}
            </div>
            <div>
              <b>Location:</b>
            </div>
            Jaipur, Rajasthan, India <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
