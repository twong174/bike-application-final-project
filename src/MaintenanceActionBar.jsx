import React from "react";
import "./MaintenanceActionBar.css";
import DownloadLogo from "../src/svg-images/download.svg";
import CalenderLogo from "../src/svg-images/calender.svg";

const MaintenanceActionBar = () => {
  return (
    <div className="maintenance-action-bar-container">
      <p className="maintenance-action-bar-title"> Overview </p>

      <div className="action-bar-button-container">
        <div className="monthy-button-container">
          <img src={CalenderLogo} alt="Calender Logo" />
          <button className="monthly-button"> Monthly </button>
        </div>
        <div className="download-button-container">
          <img src={DownloadLogo} alt="Download Logo" />
          <button className="download-button"> Download </button>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceActionBar;
