import React, { useState } from "react";
import "../src/styles/ExpandBikeCard.css";
import AddRide from "./AddRide";

const ExpandBikeCard = ({ bike, handleCollapseEvent, rideMiles }) => {
  const [isAddRideVisible, setIsAddRideVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleAddRide = () => {
    setIsAddRideVisible(!isAddRideVisible);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="expand-bike-card-container">
      <div className="left-bike-card-section-container">
        <p className="expand-bike-card-label">{bike.bikeType}</p>
        <p className="expand-bike-card-title">{bike.bikeName}</p>
        <p className="expand-bike-card-notes">Notes: {bike.notes || "None"}</p>

        <div className="main-button-container">
          <div className="button-container">
            <button className="add-ride-button" onClick={toggleAddRide}>
              Add Ride
            </button>

            {isAddRideVisible && (
              <div className="modal-container" onClick={toggleModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <AddRide toggleAddRide={toggleAddRide} />
                </div>
              </div>
            )}

            <button className="maintenance-button">Maintenance</button>
          </div>

          <button className="close-button" onClick={handleCollapseEvent}>
            Close
          </button>
        </div>
      </div>

      <div className="middle-bike-card-section-container">
        
        <p> {rideMiles} </p>
      </div>

      <div className="right-bike-card-section-container">right</div>
    </div>
  );
};

export default ExpandBikeCard;
