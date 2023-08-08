import React from "react";
import "./Stylesheets/DisplayAchievement.css";

const DisplayAchievement = (props) => {
  return (
    <div className="achievement-individual-div">
      <div className="achievement-individual-div-image-container">
        <img src="/images/AchievementIcon.png" alt="Achievement Icon" />
      </div>
      <div className="achievement-individual-div-text-container">
        {props.name}
      </div>
    </div>
  );
};

export default DisplayAchievement;
