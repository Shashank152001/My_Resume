import React, { useState } from "react";
import { Drawer } from "antd";
import "./Stylesheets/SideDrawer.css";
import { Link } from "react-scroll";
import {
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

const SideDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        onClick={() => {
          showDrawer();
        }}
        className="side-drawer-button"
        aria-label="Open Drawer"
      >
        <div className="side-drawer-button-container-div-line1" />
        <div className="side-drawer-button-container-div-line2" />
        <div className="side-drawer-button-container-div-line1" />
      </button>

      <Drawer
        title={
          <div className="side-drawer-logo-container">
            <Link
              className="side-drawer-brand"
              to="home-page"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Shashank Varshney
            </Link>
          </div>
        }
        className="side-drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="side-drawer-main-div">
          <div className="drawer-links">
            <Link
              className="side-drawer-link"
              activeClass="side-drawer-link-active"
              to="profile"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Profile
            </Link>
            <Link
              className="side-drawer-link"
              activeClass="side-drawer-link-active"
              to="education"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Education
            </Link>
            <Link
              className="side-drawer-link"
              activeClass="side-drawer-link-active"
              to="abilities"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Abilities
            </Link>
            <Link
              className="side-drawer-link"
              activeClass="side-drawer-link-active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className="side-drawer-link"
              activeClass="side-drawer-link-active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Experience
            </Link>
            <Link
              className="side-drawer-link"
              activeClass="side-drawer-link-active"
              to="achievements"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Achievements
            </Link>
            <Link
              className="side-drawer-link"
              activeClass="side-drawer-link-active"
              to="certifications"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Certifications
            </Link>
            <Link
              className="side-drawer-link"
              activeClass="side-drawer-link-active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Contact
            </Link>
            <div className="side-drawer-connect">
              <a
                href="https://www.linkedin.com/in/shashank-varshney-86sh001/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Link"
              >
                <LinkedIn fontSize="large" style={{ fontSize: "30px"  }} />
              </a>
              <a
                href="https://github.com/Shashank152001/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Link"
              >
                <GitHub fontSize="large" style={{ fontSize: "30px"  }} />
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default SideDrawer;
