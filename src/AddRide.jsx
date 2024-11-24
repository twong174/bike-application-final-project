import React, { useState } from "react";

const AddRide = () => {
  const [rideMiles, setRideMiles] = useState("");
  const [rideDuration, setRideDuration] = useState("");
  const [rideDate, setRideDate] = useState("");
  const [rideNotes, setRideNotes] = useState("");

  const [rideList, setRideList] = useState([]);

  const addRideEvent = () => {
    console.log(rideMiles);
    console.log(rideDuration);
    console.log(rideDate);
    console.log(rideNotes);
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
          <button className="add-bike-button">Add Ride</button>
        </div>
        <button className="close-button" onClick={toggleOpenClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AddRide;
