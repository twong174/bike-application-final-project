import React from "react";
import "../src/styles/RideCard.css";
import MoreHorizIcon from "../src/svg-images/more-horiz.svg";

const RideCard = ({
  rideMiles,
  rideDuration,
  rideDate,
  rideTitle,
  rideElevationGain,
  rideAverageSpeed,
}) => {
  return (
    <div className="ride-card-container">
      <header className="ride-card-header">
        <p className="ride-title">{rideTitle}</p>
        <img src = {MoreHorizIcon}/>
      </header>
      <p className="ride-date">{rideDate}</p>

      <div className="ride-stat-container">
        <div className="individual-stat-container">
          <p className="individual-stat-title">DISTANCE</p>
          <p className="ride-stat-number">{rideMiles} mi</p>
        </div>
        <div className="individual-stat-container">
          <p className="individual-stat-title">MOVING TIME</p>
          <p className="ride-stat-number">{rideDuration}</p>
        </div>
        <div className="individual-stat-container">
          <p className="individual-stat-title">AVERAGE SPEED</p>
          <p className="ride-stat-number">{rideAverageSpeed} mi/h</p>
        </div>
        <div className="individual-stat-container">
          <p className="individual-stat-title">ELEVATION GAIN</p>
          <p className="ride-stat-number">{rideElevationGain} ft</p>
        </div>
      </div>
    </div>
  );
};

export default RideCard;
