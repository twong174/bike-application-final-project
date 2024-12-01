import React, { useState } from "react";
import "../src/styles/AddRide.css";

const AddRide = ({ toggleAddRide, addNewRide }) => {
  const [rideMiles, setRideMiles] = useState(0);
  const [rideDuration, setRideDuration] = useState("00:00");
  const [rideDate, setRideDate] = useState("");
  const [rideTitle, setRideTitle] = useState("Ride 1");
  const [rideElevationGain, setRideElevationGain] = useState(0);
  const [rideAverageSpeed, setRideAverageSpeed] = useState(0);

  const addRideStats = () => {
    const newRide = {
      rideMiles,
      rideDuration,
      rideDate,
      rideTitle,
      rideElevationGain,
      rideAverageSpeed,
    };

    addNewRide(newRide);

    setRideMiles("");
    setRideDuration("");
    setRideDate("");
    setRideTitle("");
    setRideElevationGain("");
    setRideAverageSpeed("");

    toggleAddRide();
  };

  return (
    <div className="add-new-bike-card-container">
      <div className="title-container">
        <p className="new-bike-title">New Ride</p>
      </div>

      <div className="input-field-container">
        <div className="inner-container">
          <p className="input-field-title">TITLE</p>
          <input
            placeholder="Ride Title"
            name="rideTitle"
            onChange={(e) => setRideTitle(e.target.value)}
          />
        </div>
        <div className="inner-container">
          <p className="input-field-title">TOTAL MILES</p>
          <input
            name="rideMiles"
            placeholder="Total Miles"
            onChange={(e) => setRideMiles(e.target.value)}
          />
        </div>
        <div className="inner-container">
          <p className="input-field-title">DURATION</p>
          <input
            name="rideDuration"
            placeholder="Duration"
            onChange={(e) => setRideDuration(e.target.value)}
          />
        </div>
        <div className="inner-container">
          <p className="input-field-title">ELEVATION GAIN</p>
          <input
            name="rideElevationGain"
            placeholder="Elevation Gain"
            onChange={(e) => setRideElevationGain(e.target.value)}
          />
        </div>
        <div className="inner-container">
          <p className="input-field-title">AVERAGE SPEED</p>
          <input
            name="rideAverageSpeed"
            placeholder="Average speed"
            onChange={(e) => setRideAverageSpeed(e.target.value)}
          />
        </div>

        <div className="inner-container">
          <p className="input-field-title">DATE</p>
          <input
            type="date"
            name="rideDate"
            onChange={(e) => setRideDate(e.target.value)}
          />
        </div>

        <button className="add-bike-button" onClick={addRideStats}>
          Add Ride
        </button>
        <button className="close-button" onClick={toggleAddRide}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AddRide;
