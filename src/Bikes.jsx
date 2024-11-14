import React from "react";
import BikeCard from "./BikeCard";
import "./Bikes.css";
import BikeDashboardActionBar from "./BikeDashboardActionBar";
import FilterLogo from "../src/svg-images/filter.svg";

const Bikes = () => {
  return (
    <div className="bike-dashboard-container">
      <div className="top-bar-container">
        <p className="bike-container-title"> All Bikes </p>
        <p className="bike-container-description">Your personal bike garage</p>
      </div>

      <BikeDashboardActionBar />

      <div className="bike-card-container">
        <BikeCard />
        <BikeCard />
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
