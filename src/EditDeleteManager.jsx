import React, { useState } from "react";
import BikeCard from "./BikeCard";
import EditDeleteCard from "./EditDeleteCard";

const EditDeleteManager = () => {
  const [isEditDeleteCardVisible, setIsEditDeleteCardVisible] = useState(false);
  const [editDeleteCardPosition, setEditDeleteCardPosition] = useState({ x: 0, y: 0 });

  const handleToggleEditDeleteCard = (event) => {
    const rect = event.target.getBoundingClientRect();
    setEditDeleteCardPosition({
      x: rect.right + window.scrollX, // Right side of the icon
      y: rect.top + window.scrollY,  // Top of the icon
    });
    setIsEditDeleteCardVisible(!isEditDeleteCardVisible);
  };

  const bike = {
    bikeType: "Mountain Bike",
    bikeName: "TrailBlazer",
    bikeBrand: "Trek",
    lastMaintenance: "2024-10-20",
  };

  return (
    <div style={{ position: "relative" }}>
      <BikeCard
        bike={bike}
        handleExpandEvent={() => console.log("Expand event triggered")}
        handleToggleEditDeleteCard={handleToggleEditDeleteCard}
      />
      {isEditDeleteCardVisible && (
        <EditDeleteCard position={editDeleteCardPosition} />
      )}
    </div>
  );
};

export default EditDeleteManager;
