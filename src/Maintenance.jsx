import React from "react";
import "./Maintenance.css";
import FilterLogo from "../src/svg-images/filter.svg";
import AddLogo from "../src/svg-images/add.svg";
import MaintenanceActionBar from "./MaintenanceActionBar";

const Maintenance = () => {
  return (
    <div className="maintenance-container">
      <div className="top-bar-container">
        <p className="maintenance-container-title"> Maintenance </p>
        <p className="maintenance-container-description">Tactical overview</p>
      </div>

      <MaintenanceActionBar />
    </div>
  );
};

export default Maintenance;
