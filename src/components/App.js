import { Toaster } from "react-hot-toast";
import React from "react";
import SideNavbar from "./SideNavbar";
import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <Toaster position="bottom-center" reverseOrder={false} />
      <SideNavbar />
      <div className="main-content"></div>
    </div>
  );
};

export default App;
