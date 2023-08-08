import React from "react";
import "./Stylesheets/DisplayCourse.css";

const DisplayCourse = (props) => {
  return (
    <div className="certification-individual-div">
      <div className="certification-individual-div-image-container">
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          aria-label="certificate link"
        >
          <img src="/images/CertificateIcon.png" alt="Certification Icon" />
        </a>
      </div>
      <div className="certification-individual-div-text-container">
        {props.name}
      </div>
    </div>
  );
};

export default DisplayCourse;
