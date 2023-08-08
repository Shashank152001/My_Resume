import React from "react";
import "./Stylesheets/DisplayTechnology.css";

const DisplayTechnology = (props) => {
  return (
    <div className="display-technology-div">
      <span>{props.name}</span>
    </div>
  );
};

export default DisplayTechnology;
