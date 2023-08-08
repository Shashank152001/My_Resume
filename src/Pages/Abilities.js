import React from "react";
import "./Stylesheets/Abilities.css";
import { SkillsData, LanguagesData, ToolsData } from "../Data/AbilitiesData.js";
import DisplayAbility from "./Components/DisplayAbility";
import SectionHeading from "./Components/SectionHeading";

const Abilities = () => {
  return (
    <div className="abilities" id="abilities">
      <SectionHeading
        heading="Abilities"
        quote="“Life without knowledge is death in disguise.”"
        quoteBy=" - Talib Kweli"
      />
      <h3>Skills</h3>
      <div className="abilities-tab-div">
        {SkillsData.map((item, index) => {
          return (
            <DisplayAbility
              key={"A" + index}
              name={item.name}
              rating={item.rating}
            />
          );
        })}
      </div>
      <hr className="abilities-divider-line" />
      <h3>Languages</h3>
      <div className="abilities-tab-div">
        {LanguagesData.map((item, index) => {
          return (
            <DisplayAbility
              key={"B" + index}
              name={item.name}
              rating={item.rating}
            />
          );
        })}
      </div>
      <hr className="abilities-divider-line" />
      <h3>Tools</h3>
      <div className="abilities-tab-div">
        {ToolsData.map((item, index) => {
          return (
            <DisplayAbility
              key={"C" + index}
              name={item.name}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Abilities;
