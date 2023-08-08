import React from "react";
import "./Stylesheets/FrontPage.css";
import { TypeAnimation } from "react-type-animation";

const FrontPage = () => {
  return (
    <div id="home-page">
      <div className="context">
        Hello I'm
        <h1>Shashank Varshney</h1>
        <TypeAnimation
          sequence={[
            "Full Stack Web Developer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Mobile Developer",
            1000,
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
        />
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default FrontPage;
