import React from "react";
import BikeCard from "./BikeCard";
import "./Bikes.css";

const Bikes = () => {
  return (
    <div className="bike-dashboard-container">
      <div className="top-bar-container">
        <p className="bike-container-title"> All Bikes </p>
        <p className="bike-container-description">
          Here is a compilation of bikes you have added
        </p>
      </div>

      <div className="action-bar-container">
        <p> Bikes </p>
        <div className="action-bar-buttons">
          <button> Filter </button>
          <button> Add New </button>
        </div>
      </div>

      <div className="bike-card-container">
        <BikeCard />
        <BikeCard />
        <BikeCard />
        <BikeCard />
        <BikeCard />
        <BikeCard />
      </div>
    </div>
  );
};

export default Bikes;
