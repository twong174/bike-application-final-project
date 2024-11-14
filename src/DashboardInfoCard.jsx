import React from "react";
import IncreaseButton from "./IncreaseButton";
import "./DashboardInfoCard.css";
import ArrowRightAltLogo from "../src/svg-images/arrow_right_alt.svg";
import MoreHorizLogo from "../src/svg-images/more-horiz.svg";

const DashboardInfoCard = () => {
  return (
    <div className="dashboard-info-card-container">
      <div className="info-title-container">
        <p className="stat-title"> TOTAL MILES RIDDEN</p>
        <img src={MoreHorizLogo} />
      </div>

      <div className="stat-container">
        <p className="stat-number"> 1000 mi</p>
        <IncreaseButton />
      </div>
      <div className="additional-info-container">
        <p className="stat-from-last-month">
          <span className="last-month-stat-number"> +10 </span> from last month
        </p>
        <img src={ArrowRightAltLogo} alt="Arrow Right Alt Logo" />
      </div>
    </div>
  );
};

export default DashboardInfoCard;
