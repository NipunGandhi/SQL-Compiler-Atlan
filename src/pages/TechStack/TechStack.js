import React from "react";
import "../TechStack/TechStack.scss";

const TechStack = () => {
  const techStackUsed = ["React.js", "HTML", "CSS", "JavaScript"];
  const techStackIKnow = {
    "Programming Languages and Frameworks": [
      "Flutter",
      "Python",
      "C/C++",
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "Express.js",
    ],
    "Database and Tools": [
      "Unity",
      "MongoDB",
      "Firebase",
      "Bitbucket",
      "MySQL",
      "Android Studio",
      "Appium",
      "Postman",
      "Jira",
      "Git/Github",
    ],
    Familiar: ["R", "PHP", "C Sharp", "Node.js"],
  };

  return (
    <div className="about-container">
      <h2>Tech Stack Used</h2>
      <div className="skills">
        <ul>
          {techStackUsed.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <h2>Tech Stack I Know</h2>
      <div className="skills">
        {Object.entries(techStackIKnow).map(([category, stack], index) => (
          <div key={index}>
            <h3>{category}</h3>
            <ul>
              {stack.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
