import React from "react";
import "../src/styles/Maintenance.css";
import FilterLogo from "../src/svg-images/filter.svg";
import AddLogo from "../src/svg-images/add.svg";
import ButtonBar from "./ButtonBar";

const Maintenance = () => {
  return (
    <div className="maintenance-container">
      <div className="top-bar-container">
        <p className="maintenance-container-title"> Maintenance </p>
        <p className="maintenance-container-description">Fixer Upper</p>
      </div>

      <ButtonBar
        title="Maintenance"
        leftLogo={FilterLogo}
        rightLogo={AddLogo}
        leftButton="Filter"
        rightButton="Add New"
      />
    </div>
  );
};

export default Maintenance;
