import React, { useState } from "react";
import "./Stylesheets/Certifications.css";
import SectionHeading from "./Components/SectionHeading";
import {
  CoursesData,
} from "../Data/CertificationData.js";
import DisplayCourse from "./Components/DisplayCourse";

const Certifications = () => {
  const [displayAllCourseCertificates, setDisplayAllCourseCertificates] =
    useState(false);
  // const [
  //   displayAllVirtualInternshipCertificates,
  //   setDisplayAllVirtualInternshipCertificates,
  // ] = useState(false);
  return (
    <div className="certifications" id="certifications">
      <SectionHeading
        heading="Certifications"
        quote="“Focus more on your desire than on your doubt, and the dream will take care of itself”"
        quoteBy=" - Mark Twain"
      />
      {/* <h3>Virtual Internships</h3>
      <div className="certifications-div">
        {VirtualInternshipData.map((data, idx) => {
          return <DisplayCourse key={idx} name={data.name} link={data.link} />;
        })}
        {VirtualInternshipData.length > 10 &&
          !displayAllVirtualInternshipCertificates && (
            <button
              onClick={() => setDisplayAllVirtualInternshipCertificates(true)}
              className="certification-display-more-button"
            >
              View All Course Certificates
            </button>
          )}
        {displayAllVirtualInternshipCertificates &&
          VirtualInternshipData.slice(10).map((data, idx) => {
            return (
              <DisplayCourse key={idx} name={data.name} link={data.link} />
            );
          })}
      </div> */}
      <h3>Courses</h3>
      <div className="certifications-div">
        {CoursesData.slice(0, 10).map((data, idx) => {
          return <DisplayCourse key={idx} name={data.name} link={data.link} />;
        })}
        {CoursesData.length > 10 && !displayAllCourseCertificates && (
          <button
            onClick={() => setDisplayAllCourseCertificates(true)}
            className="certification-display-more-button"
          >
            View All Course Certificates
          </button>
        )}
        {displayAllCourseCertificates &&
          CoursesData.slice(10).map((data, idx) => {
            return (
              <DisplayCourse key={idx} name={data.name} link={data.link} />
            );
          })}
      </div>
    </div>
  );
};

export default Certifications;
