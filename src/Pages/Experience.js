import React from "react";
import "./Stylesheets/Experience.css";
import SectionHeading from "./Components/SectionHeading";
import ExperienceData from "../Data/ExperienceData.js";

import { Timeline } from "antd";

const Experience = () => {
  const CustomDot = () => <div className="experience-dot"></div>;

  return (
    <div className="experience" id="experience">
      <SectionHeading
        heading="Experience"
        quote="“All the world’s a stage, and all the men and women merely players.”"
        quoteBy=" - William Shakespeare"
      />
      <div className="experience-timeline-container">
        <Timeline className="experience-timeline">
          {ExperienceData.map((item, index) => {
            return (
              <Timeline.Item
                className="experience-timeline-item"
                dot={<CustomDot />}
                color="white"
                key={index}
              >
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <p>{item.date}</p>
                <ul>
                  {item.details.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};

export default Experience;
