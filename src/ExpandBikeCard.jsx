import React from "react";
import "../src/styles/ExpandBikeCard.css";

const ExpandBikeCard = ({ bike, handleCollapseEvent }) => {
  return (
    <div className="expand-bike-card-container">
      <p className="expand-bike-card-label">{bike.bikeType}</p>
      <p className="expand-bike-card-title">{bike.bikeName}</p>
      <p className="expand-bike-card-notes">Notes: {bike.notes || "None"}</p>

      <div className="button-container">
        <button className="add-ride-button">Add Ride</button>
        <button className="maintenance-button">Maintenance</button>
      </div>

      <button className="close-button" onClick={handleCollapseEvent}>
        Close
      </button>
    </div>
  );
};

export default ExpandBikeCard;
