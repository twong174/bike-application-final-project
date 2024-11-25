import React, { useState } from "react";
import "../src/styles/AddRide.css";
import RideCard from "./RideCard";

const AddRide = ({ toggleAddRide, addNewRide }) => {
  const [rideMiles, setRideMiles] = useState("");
  const [rideDuration, setRideDuration] = useState("");
  const [rideDate, setRideDate] = useState("");
  const [rideNotes, setRideNotes] = useState("");
  const [rideElevationGain, setRideElevationGain] = useState("");
  const [rideAverageSpeed, setRideAverageSpeed] = useState("");

  const addRideStats = () => {
    // Create the new ride object
    const newRide = {
      rideMiles,
      rideDuration,
      rideDate,
      rideNotes,
      rideElevationGain,
      rideAverageSpeed,
    };

    // Add the new ride to the list of rides
    addNewRide(newRide);

    // Reset the form fields
    setRideMiles("");
    setRideDuration("");
    setRideDate("");
    setRideNotes("");
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

        <div className="inner-container">
          <p className="input-field-title">NOTES</p>
          <textarea
            className="notes-input"
            name="notes"
            placeholder="Notes"
            onChange={(e) => setRideNotes(e.target.value)}
          />
        </div>
        <div className="add-bike-button-container">
          <button className="add-bike-button" onClick={addRideStats}>
            Add Ride
          </button>
        </div>
        <button className="close-button" onClick={toggleAddRide}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AddRide;
