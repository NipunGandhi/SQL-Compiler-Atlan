import React from "react";

const Internship = ({ title, role, description }) => {
  return (
    <div className="internship">
      <h3>{title}</h3>
      <p>
        <strong>{role}</strong>
      </p>
      <ul>
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Internship;
