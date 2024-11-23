import React, { useState, useEffect } from "react";
import "../src/styles/Bikes.css";
import FilterLogo from "../src/svg-images/filter.svg";
import AddLogo from "../src/svg-images/add.svg";
import ButtonBar from "./ButtonBar";
import AddNewBikeCard from "./AddNewBikeCard";
import BikeCard from "./BikeCard";
import ExpandBikeCard from "./ExpandBikeCard";

const Bikes = () => {
  const [bikes, setBikes] = useState([]);
  const [newBikeModalOpen, setNewBikeModalOpen] = useState(false);
  const [selectedBike, setSelectedBike] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Load bikes from localStorage
  useEffect(() => {
    const storedBikes = JSON.parse(localStorage.getItem("bikes"));
    if (storedBikes) {
      setBikes(storedBikes);
    }
  }, []);

  // Save bikes to localStorage
  useEffect(() => {
    localStorage.setItem("bikes", JSON.stringify(bikes));
  }, [bikes]);

  const toggleNewBikeModal = () => {
    setNewBikeModalOpen(!newBikeModalOpen);
  };

  const addBike = (newBike) => {
    setBikes([...bikes, newBike]);
    setNewBikeModalOpen(false);
  };

  const handleExpandEvent = (bike) => {
    setSelectedBike(bike);
    setIsExpanded(true);
  };

  const handleCollapseEvent = () => {
    setSelectedBike(null);
    setIsExpanded(false);
  };

  return (
    <div className="bike-dashboard-container">
      <div className="top-bar-container">
        <p className="bike-container-title">All Bikes</p>
        <p className="bike-container-description">Your personal bike garage</p>
      </div>

      <ButtonBar
        title="Bikes"
        leftLogo={FilterLogo}
        rightLogo={AddLogo}
        leftButton="Filter"
        rightButton="Add New"
        onRightClick={toggleNewBikeModal}
      />

      {!isExpanded ? (
        <div className="bike-card-container">
          {bikes.map((bike, index) => (
            <BikeCard
              key={index}
              bike={bike}
              handleExpandEvent={() => handleExpandEvent(bike)}
            />
          ))}
        </div>
      ) : (
        <ExpandBikeCard
          bike={selectedBike}
          handleCollapseEvent={handleCollapseEvent}
        />
      )}

      {newBikeModalOpen && (
        <div className="modal-container" onClick={toggleNewBikeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <AddNewBikeCard closeModal={toggleNewBikeModal} addBike={addBike} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Bikes;
