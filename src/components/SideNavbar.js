import React, { useState } from "react";
import "./SideNavbar.scss";
import { links } from "../helpers/linksData";
import About from "../pages/About/About.js";
import Guide from "../pages/Guide";
import Intro from "../pages/Intro";
import TechStack from "../pages/TechStack/TechStack.js";
import Extra from "../pages/Extra/Extra.js";

const SideSection = () => {
  const [currentScreen, setCurrentScreen] = useState(<Intro />);

  const handleLinkClick = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="side-navbar">
      <ul className="link-items">
        {links.map(({ icon, path }, index) => {
          let screen;
          switch (path) {
            case "/":
              screen = <Intro />;
              break;
            case "/aboutMe":
              screen = <About />;
              break;
            case "/guide":
              screen = <Guide />;
              break;
            case "/techStack":
              screen = <TechStack />;
              break;
            case "/extra":
              screen = <Extra />;
              break;
            default:
              screen = <Intro />;
          }
          return (
            <li
              key={index}
              className="link-item"
              onClick={() => handleLinkClick(screen)}
            >
              {icon}
            </li>
          );
        })}
      </ul>
      <div className="page-content">{currentScreen}</div>
    </div>
  );
};

export default SideSection;
