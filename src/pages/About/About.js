import React from "react";
import "../About/About.scss";
import Internship from "../About/Internship";
import internships from "../About/internshipData.js";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        Hi there, My name is Nipun Gandhi, and I am a 4th-year student at Thapar
        Institute of Engineering and Technology. I am a developer with around 4
        years of experience in app development, and I have 16 months of work
        experience as an intern in various startups (Debound, Gameon India,
        Parat, and PicoSoft Solution). I also have a good grasp of Data
        Structures and Algorithms (DSA) in C++ and have solved over 260
        questions on Leetcode. Additionally, I possess basic knowledge of Java,
        Python, Appium, HTML, CSS, Node.js, SQL, MongoDB, and Firebase.
      </p>
      <h2>Internships</h2>
      <div className="internships">
        {internships.map((internship, index) => (
          <Internship key={index} {...internship} />
        ))}
      </div>
    </div>
  );
};

export default About;
