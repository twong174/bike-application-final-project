import React from "react";
import "./IncreaseButton.css";
import ArrowCircleUpLogo from "../src/svg-images/arrow-circle-up.svg";

const IncreaseButton = () => {
  return (
    <div className="button-container">
      <img src={ArrowCircleUpLogo} alt="Arrow Circle Up Logo" />
      <p className="percent-increase-number"> 10.5%</p>
    </div>
  );
};

export default IncreaseButton;
