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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await fetch(
          "http://localhost:8888/get_bikes.php",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch bikes");
        }

        const data = await response.json();
        
        if (data.success) {
          setBikes(data.data);
        } else {
          setError("No bikes found");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  const toggleNewBikeModal = () => {
    setNewBikeModalOpen(!newBikeModalOpen);
  };

  const addBike = (newBike) => {
    setBikes([...bikes, newBike]);
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

      {loading && <p>Loading bikes...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && !isExpanded && (
        <div className="bike-card-container">
          {bikes.map((bike, index) => (
            <BikeCard
              key={index}
              bike={bike}
              handleExpandEvent={() => handleExpandEvent(bike)}
            />
          ))}
        </div>
      )}

      {isExpanded && (
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