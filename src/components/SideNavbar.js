import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./SideNavbar.scss";
import { links } from "../helpers/linksData";
import About from "../pages/About/About.js";
import Guide from "../pages/Guide";
import Intro from "../pages/Intro";
import TechStack from "../pages/TechStack";
import Extra from "../pages/Extra";

const SideSection = () => {
  return (
    <div className="side-navbar">
      <BrowserRouter>
        <ul className="link-items">
          {links.map(({ icon, path }, index) => (
            <li key={index} className="link-item">
              <Link to={path} className="link">
                {icon}
              </Link>
            </li>
          ))}
        </ul>
        <div className="page-content">
          <div className="scroll">
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/aboutMe" element={<About />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/techStack" element={<TechStack />} />
              <Route path="/extra" element={<Extra />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default SideSection;
