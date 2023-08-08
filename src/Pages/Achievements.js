import React, { useState } from "react";
import "./Stylesheets/Achievements.css";
import AchievementData from "../Data/AchievementData.js";
import SectionHeading from "./Components/SectionHeading";
import DisplayAchievement from "./Components/DisplayAchievement";

const Achievements = () => {
  const [displayAllAchievements, setDisplayAllAchievements] = useState(false);
  return (
    <div className="achievements" id="achievements">
      <SectionHeading
        heading="Achievements"
        quote="“Genius is one percent inspiration and ninety-nine percent perspiration.”"
        quoteBy="- Thomas Edison"
      />
      <div className="achievements-container">
        {AchievementData.map((data, idx) => {
          return (
            <DisplayAchievement key={idx} name={data.name} link={data.link} />
          );
        })}
        {AchievementData.length > 10 && !displayAllAchievements && (
          <button
            onClick={() => setDisplayAllAchievements(true)}
            className="achievements-display-more-button"
          >
            View All Achievement
          </button>
        )}
        {displayAllAchievements &&
          AchievementData.slice(10).map((data, idx) => {
            return (
              <DisplayAchievement key={idx} name={data.name} link={data.link} />
            );
          })}
      </div>
    </div>
  );
};
export default Achievements;
