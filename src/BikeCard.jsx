import React, { useState, useEffect, useRef } from "react";
import "../src/styles/BikeCard.css";
import MoreHorizLogo from "../src/svg-images/more-horiz.svg";
import ConstructionLogo from "../src/svg-images/construction.svg";
import EditDeleteCard from "./EditDeleteCard";

const BikeCard = ({ bike, handleExpandEvent }) => {
  const [editDeleteVisible, setEditDeleteVisible] = useState(false);

  const toggleEditDeleteVisibility = (e) => {
    e.stopPropagation();
    setEditDeleteVisible(!editDeleteVisible);
  };

  return (
    <div className="card-container" onClick={handleExpandEvent}>
      <div className="top-row">
        <span className="bike-label">{bike.bike_type}</span>
        <img
          className="more-horiz-logo"
          src={MoreHorizLogo}
          alt="More Horiz Logo"
          onClick={toggleEditDeleteVisibility}
        />
        {editDeleteVisible && <EditDeleteCard />}
      </div>
      <p className="bike-name">{bike.bike_name}</p>
      <p className="bike-model">{bike.bike_brand}</p>
      <hr />
      <div className="last-maintenance-date-container">
        <img src={ConstructionLogo} alt="Construction Logo" />
        <div className="last-maintenance-date">
          Last Maintenance: {bike.lastMaintenance || "N/A"}
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
