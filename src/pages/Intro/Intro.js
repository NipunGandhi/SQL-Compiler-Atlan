import React from "react";
import "../Intro/Intro.scss";

const Intro = () => {
  const Syntax = [
    { "Command 1": "Select * from table" },
    { "Command 2": "Select col1, col2 from table" },
    { "Command 3": "Select * from table where val > 5" },
    { "Command 4": "Select col1, col2 from table where val > 5" },
  ];

  return (
    <div className="about-container">
      <section className="section">
        <h2>Logic Used</h2>
        <div className="intro">
          <p>
            The statement written inside the editor gets collected and, upon
            clicking 'run,' it's converted into a query. For this purpose, I've
            created a function, <strong>parseSQL</strong>, that breaks down the
            query into parts:
          </p>
          <ul>
            <li>
              <strong>select</strong>: specifies the columns to select
            </li>
            <li>
              <strong>from</strong>: indicates the table name
            </li>
            <li>
              <strong>where</strong>: defines any conditions, if given
            </li>
          </ul>
          <p>
            Additionally, there's a function called <strong>queryLogic</strong>{" "}
            to handle the query and return results in the form of an array of
            objects. This data is then passed to the table component for
            display.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Commands Working</h2>
        <h3>Note: These command types are compatible with all tables</h3>
        <div className="intro">
          <ul>
            {Syntax.map((command, index) => {
              const [key, value] = Object.entries(command)[0];
              return (
                <li key={index}>
                  <strong>{key}:</strong> {value}
                </li>
              );
            })}
          </ul>
          <p>
            Current logic is built for <strong>SELECT</strong> commands. The{" "}
            <strong>WHERE</strong> clause can handle only one condition.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Layout</h2>
        <div className="intro">
          <p>
            The screen layout consists of two primary sections:
            <ul>
              <li>
                <strong>SideSection</strong>: responsible for displaying the
                Navbar and linked screens
              </li>
              <li>
                <strong>MainContent</strong>: displays the table and editor in a
                column layout
              </li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Intro;
