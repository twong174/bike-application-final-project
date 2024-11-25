import React from "react";
import "../src/styles/RideCard.css";

const RideCard = ({
  rideMiles,
  rideDuration,
  rideDate,
  rideNotes,
  rideElevationGain,
  rideAverageSpeed,
}) => {
  return (
    <div className="ride-card-container">
      <p className="ride-title">Night Ride</p>
      <p className="ride-date">{rideDate}</p>

      <div className="ride-stat-container">
        <div className="individual-stat-container">
          <p className="individual-stat-title">DISTANCE</p>
          <p>{rideMiles}</p>
        </div>
        <div className="individual-stat-container">
          <p className="individual-stat-title">MOVING TIME</p>
          <p>{rideDuration}</p>
        </div>
        <div className="individual-stat-container">
          <p className="individual-stat-title">AVERAGE SPEED</p>
          <p>{rideAverageSpeed}</p>
        </div>
        <div className="individual-stat-container">
          <p className="individual-stat-title">ELEVATION GAIN</p>
          <p>{rideElevationGain}</p>
        </div>
      </div>
    </div>
  );
};

export default RideCard;
