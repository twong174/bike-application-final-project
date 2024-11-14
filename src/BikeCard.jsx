import React from "react";
import "./BikeCard.css";
import MoreHorizLogo from "../src/svg-images/more-horiz.svg";
import ConstructionLogo from "../src/svg-images/construction.svg";

const BikeCard = () => {
  return (
    <div className="card-container">
      <div className="top-row">
        <span className="fixed-label">Fixed </span>
        <img
          className="more-horiz-logo"
          src={MoreHorizLogo}
          alt="More Horiz Logo"
        />
      </div>
      <p className="bike-name"> Wegus </p>
      <p className="bike-model"> Tyrant Beastie </p>
      <hr />
      <div className="last-maintenance-date-container">
        <img src={ConstructionLogo} alt="Construction Logo" />
        <div className="last-maintenance-date"> 02 May 23 </div>
      </div>
    </div>
  );
};

export default BikeCard;
