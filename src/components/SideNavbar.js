import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./SideNavbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import About from "../pages/About";
import Guide from "../pages/Guide";

const links = [
  {
    icon: (
      <FontAwesomeIcon
        icon={faChalkboardUser}
        style={{ fontSize: "24px", color: "orange" }}
      />
    ),
    path: "/",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faChalkboardUser}
        style={{ fontSize: "24px", color: "orange" }}
      />
    ),
    path: "/",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faChalkboardUser}
        style={{ fontSize: "24px", color: "orange" }}
      />
    ),
    path: "/",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faChalkboardUser}
        style={{ fontSize: "24px", color: "orange" }}
      />
    ),
    path: "/",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faChalkboardUser}
        style={{ fontSize: "24px", color: "orange" }}
      />
    ),
    path: "/guide",
  },
];

const SideSection = () => {
  return (
    <div className="side-navbar">
      <BrowserRouter>
        <ul className="link-items">
          {links.map((link) => (
            <li key={link.value} className="link-item">
              <Link to={link.path} className="link">
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default SideSection;
