import "./Stylesheets/Navbar.css";
import React from "react";
import SideDrawer from "./SideDrawer";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="navbar" sticky="top">
      <div className="navbar-logo-container">
        <Link
          className="navbar-brand"
          to="home-page"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Shashank Varshney
        </Link>
      </div>
      <div className="navbar-buttons-container">
        <div className="navbar-links-container">
          <Link
            className="navbar-link"
            activeClass="navbar-link-active"
            to="profile"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Profile
          </Link>
          <Link
            className="navbar-link"
            activeClass="navbar-link-active"
            to="education"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Education
          </Link>
          <Link
            className="navbar-link"
            activeClass="navbar-link-active"
            to="abilities"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Abilities
          </Link>
          <Link
            className="navbar-link"
            activeClass="navbar-link-active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="navbar-link"
            activeClass="navbar-link-active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Experience
          </Link>
          <Link
            className="navbar-link"
            activeClass="navbar-link-active"
            to="achievements"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Achievements
          </Link>
          <Link
            className="navbar-link"
            activeClass="navbar-link-active"
            to="certifications"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Certifications
          </Link>
          <Link
            className="navbar-link"
            activeClass="navbar-link-active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Contact
          </Link>
        </div>
        <SideDrawer />
      </div>
    </header>
  );
};

export default Navbar;
