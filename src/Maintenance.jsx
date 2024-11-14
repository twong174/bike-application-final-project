import React from "react";
import "./Maintenance.css";
import FilterLogo from "../src/svg-images/filter.svg";
import AddLogo from "../src/svg-images/add.svg";

const Maintenance = () => {
  return (
    <div className="maintenance-main-container">
      <div className="maintenance-title-container">
        <p className="maintenance-title"> Maintenance </p>
      </div>

      <div className="maintenance-action-bar">
        <div className="maintenance-action-bar-title">
          <p className="action-bar-title"> To Do </p>
        </div>

        <div className="maintenance-action-bar-button-container">
          <div className="filter-button-container">
            <img src={FilterLogo} alt="Filter Logo" />
            <button className="filter-button">Filter</button>
          </div>

          <div className="add-button-container">
            <img src={AddLogo} alt="Add Logo" />
            <button className="add-button">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
