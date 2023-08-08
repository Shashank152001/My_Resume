import React from "react";
import ProjectData from "../Data/ProjectData";
import "./Stylesheets/Projects.css";
import DisplayProjects from "./Components/DisplayProjects";
import SectionHeading from "./Components/SectionHeading";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <SectionHeading
        heading="Projects"
        quote="“You can do anything you set your mind to.”"
        quoteBy="- Benjamin Franklin"
      />
      <div className="projects-div">
        {ProjectData.map((item, index) => {
          return (
            <DisplayProjects
              key={index}
              name={item.name}
              index={item.index}
              details={item.details}
              technology={item.technology}
              links={item.links}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
