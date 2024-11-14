import React, { useState } from "react";
import "./BikeDashboardActionBar.css";
import FilterLogo from "../src/svg-images/filter.svg";
import AddLogo from "../src/svg-images/add.svg";
import AddNewBikeCard from "./AddNewBikeCard";

const BikeDashboardActionBar = () => {
  const [newBike, setNewBike] = useState(false);
  return (
    <div className="bike-action-bar-container">
      <p className="bike-action-bar-title"> Bikes </p>

      <div className="action-bar-button-container">
        <div className="filter-button-container">
          <img src={FilterLogo} alt="Filter Logo" />
          <button className="filter-button"> Filter </button>
        </div>
        <div className="add-new-button-container">
          <img src={AddLogo} alt="Add Logo" />
          <button
            className="add-new-button"
            onClick={() => setNewBike(!newBike)}
          >
            Add New
          </button>
          {newBike && <AddNewBikeCard />}
        </div>
      </div>
    </div>
  );
};

export default BikeDashboardActionBar;
