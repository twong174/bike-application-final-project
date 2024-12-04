import React, { useState } from "react";
import CloseLogo from "../src/svg-images/close.svg";
import "../src/styles/AddNewBikeCard.css";

const AddNewBikeCard = ({ closeModal, addBike }) => {
  const [bikeDetails, setBikeDetails] = useState({
    bikeName: "",
    bikeType: "",
    bikeBrand: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBikeDetails({ ...bikeDetails, [name]: value });
  };

  const handleAddBike = async (e) => {
    e.preventDefault(); 

    if (
      !bikeDetails.bikeName ||
      !bikeDetails.bikeType ||
      !bikeDetails.bikeBrand
    ) {
      alert("Please fill out all required fields.");
      return;
    }
    try {
      const response = await fetch("http://localhost:8888/index.php", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bikeDetails),
      });

      const data = await response.json();
      console.log(data);
      addBike(bikeDetails);
      closeModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="add-new-bike-card-container">
      <img
        src={CloseLogo}
        alt="Close Logo"
        className="close-logo"
        onClick={closeModal}
      />
      <div className="title-container">
        <p className="new-bike-title">New Bike</p>
      </div>

      <form className="input-field-container" onSubmit={handleAddBike}>
        <div className="inner-container">
          <p className="input-field-title">NAME</p>
          <input
            name="bikeName"
            placeholder="Name"
            onChange={handleChange}
            value={bikeDetails.bikeName}
          />
        </div>
        <div className="inner-container">
          <p className="input-field-title">BIKE TYPE</p>
          <input
            name="bikeType"
            placeholder="Bike Type"
            onChange={handleChange}
            value={bikeDetails.bikeType}
          />
        </div>
        <div className="inner-container">
          <p className="input-field-title">BRAND</p>
          <input
            name="bikeBrand"
            placeholder="Brand"
            onChange={handleChange}
            value={bikeDetails.bikeBrand}
          />
        </div>
        <div className="inner-container">
          <p className="input-field-title">NOTES</p>
          <textarea
            className="notes-input"
            name="notes"
            placeholder="Notes"
            onChange={handleChange}
            value={bikeDetails.notes}
          />
        </div>

        <div className="add-bike-button-container">
          <button className="add-bike-button" type="submit" onClick = {handleAddBike}>
            Add Bike
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewBikeCard;
