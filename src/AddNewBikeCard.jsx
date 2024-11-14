import React, { useState } from "react";
import CloseLogo from "../src/svg-images/close.svg";
import "./AddNewBikeCard.css";

const AddNewBikeCard = () => {
  return (
    <div className="add-new-bike-card-container">
      <img src={CloseLogo} alt="Close Logo" className="close-logo" />
      <div className="title-container">
        <h1 className="new-bike-title"> New Bike </h1>
      </div>

      <div className="input-field-container">
        <div className="name-container">
          <p> Name </p>
          <input placeholder="Name" />
        </div>
        <div className="bike-type-container">
          <p> Bike Type </p>
          <input placeholder="Bike Type" />
        </div>
        <div className="brand-container">
          <p> Brand </p>
          <input placeholder="Brand" />
        </div>
        <div className="weight-container">
          <p> Weight </p>
          <input placeholder="Weight" />
        </div>
        <div className="add-bike-button-container">
          <button className="add-bike-button">Add Bike</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewBikeCard;
