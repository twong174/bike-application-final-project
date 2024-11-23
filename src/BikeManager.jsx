import React, { useState } from "react";
import BikeCard from "./BikeCard";
import AddNewBikeCard from "./AddNewBikeCard";
import ExpandBikeCard from "./ExpandBikeCard";

const BikeManager = () => {
  const [bike, setBike] = useState(null);
  const [isBikeAdded, setIsBikeAdded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBikeSubmit = (bikeData) => {
    setBike(bikeData);
    setIsBikeAdded(true);
  };

  const handleExpandEvent = () => {
    setIsExpanded(true);
  };

  const handleCollapseEvent = () => {
    setIsExpanded(false);
  };

  return (
    <div>
      {!isBikeAdded ? (
        <AddNewBikeCard onBikeSubmit={handleBikeSubmit} />
      ) : isExpanded ? (
        <ExpandBikeCard bike={bike} handleCollapseEvent={handleCollapseEvent} />
      ) : (
        <BikeCard bike={bike} handleExpandEvent={handleExpandEvent} />
      )}
    </div>
  );
};

export default BikeManager;
