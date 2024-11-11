import React from "react";
import "./BikeCard.css";
import MoreHorizLogo from "../src/svg-images/more-horiz.svg";

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
      <p className="bike-name"> Name </p>
      <p className="bike-model"> Model </p>
    </div>
  );
};

export default BikeCard;
