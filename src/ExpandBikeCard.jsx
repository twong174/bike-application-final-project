import React, { useState } from "react";
import "../src/styles/ExpandBikeCard.css";
import AddRide from "./AddRide";
import RideCard from "./RideCard";

import MaintenanceCard from "./MaintenanceCard";
import AddMaintenanceTask from "./AddMaintenanceTask";

const ExpandBikeCard = ({ bike, handleCollapseEvent }) => {
  const [isAddRideVisible, setIsAddRideVisible] = useState(false);
  const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
  const [rides, setRides] = useState([]); // Store rides here
  const [tasks, setTasks] = useState([]);

  const toggleAddRide = () => {
    setIsAddRideVisible(!isAddRideVisible);
  };

  const toggleAddTask = () => {
    setIsAddTaskVisible(!isAddTaskVisible);
  };

  const addNewRide = (newRide) => {
    setRides((prevRides) => [...prevRides, newRide]); // Add new ride to the array
  };

  const addNewTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
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
              <div className="modal-container">
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <AddRide
                    toggleAddRide={toggleAddRide}
                    addNewRide={addNewRide}
                  />
                </div>
              </div>
            )}

            <button className="maintenance-button" onClick={toggleAddTask}>
              Maintenance
            </button>
            {isAddTaskVisible && (
              <div className="modal-container">
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <AddMaintenanceTask
                    toggleAddTask={toggleAddTask}
                    addNewTask={addNewTask}
                  />
                </div>
              </div>
            )}
          </div>

          <button className="close-button" onClick={handleCollapseEvent}>
            Close
          </button>
        </div>
      </div>

      <div className="middle-bike-card-section-container">
        {rides.map((ride, index) => (
          <RideCard
            key={index}
            rideMiles={ride.rideMiles}
            rideDuration={ride.rideDuration}
            rideDate={ride.rideDate}
            rideNotes={ride.rideNotes}
            rideElevationGain={ride.rideElevationGain}
            rideAverageSpeed={ride.rideAverageSpeed}
          />
        ))}
      </div>

      <div className="right-bike-card-section-container">
        {tasks.map((task, index) => (
          <MaintenanceCard
            key={index}
            taskName={task.taskName}
            taskToolsNeeded={task.taskToolsNeeded}
            taskDueDate={task.taskDueDate}
            taskNotes={task.taskNotes}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpandBikeCard;
