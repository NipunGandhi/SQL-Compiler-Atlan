import React from "react";
import "./SideNavbar.scss";
import { FaRocket, FaTable, FaEdit } from "react-icons/fa";

const links = [
  { text: "Getting Started", value: "getting-started", icon: <FaRocket /> },
  { text: "Tables", value: "tables", icon: <FaTable /> },
  { text: "Query Editor", value: "query-editor", icon: <FaEdit /> },
];

const SideNavbar = () => {
  return (
    <div className="side-navbar">
      <ul className="link-items">
        {links.map((link) => (
          <li
            key={link.value}
            className={`link-item ${link.value === "query-editor" && "active"}`}
          >
            {link.icon}
            <span>{link.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
