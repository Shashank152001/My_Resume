import React, { useState } from "react";
import DisplayTechnology from "./DisplayTechnology";
import "./Stylesheets/DisplayProjects.css";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LinksModal from "./LinksModal";

const DisplayProjects = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <LinksModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} links={props.links}/>
      <div className="display-projects-div">
        <div className="display-projects-main-div">
          <h3 className="display-projects-div-title">{props.name}</h3>
          <button
            className="display-projects-div-link"
            type="button"
            onClick={() => setIsModalOpen(true)}
          >
            Links <CallMadeIcon fontSize="10px" />
          </button>
        </div>
        <p className="display-projects-div-content">{props.details}</p>
        <div className="display-projects-technology-div">
          {props.technology.map((item, index) => {
            return <DisplayTechnology key={index} name={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayProjects;
