import React from "react";
import "../src/styles/BikeCard.css";
import MoreHorizLogo from "../src/svg-images/more-horiz.svg";
import ConstructionLogo from "../src/svg-images/construction.svg";

const BikeCard = ({ bike, handleExpandEvent, handleToggleEditDeleteCard }) => {
  return (
    <div className="card-container" onClick={handleExpandEvent}>
      <div className="top-row">
        <span className="bike-label">{bike.bikeType}</span>
        <img
          className="more-horiz-logo"
          src={MoreHorizLogo}
          alt="More Horiz Logo"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the card's expand event
            handleToggleEditDeleteCard(e); // Pass the event to determine position
          }}
        />
      </div>
      <p className="bike-name">{bike.bikeName}</p>
      <p className="bike-model">{bike.bikeBrand}</p>
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
